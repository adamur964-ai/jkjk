import { auth, db } from './firebase-config.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { hashString } from './utils.js';

export async function protectWithPin(callback) {
    const user = auth.currentUser;
    const userSnap = await getDoc(doc(db, "users", user.uid));
    const userData = userSnap.data();

    if (!userData.pinHash) {
        window.location.href = "set-pin.html";
        return;
    }

    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-[#002147]/95 z-[9999] flex items-center justify-center p-6 backdrop-blur-sm";
    modal.innerHTML = `
        <div class="bg-white tb-card p-8 w-full max-w-xs text-center shadow-2xl">
            <h3 class="font-black text-[#002147] mb-2">Security Verification</h3>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Enter PIN to authorize</p>
            <input type="password" id="guard-pin" class="w-full text-center text-2xl tracking-[0.5em] mb-6 h-14 bg-slate-50 border-slate-200" inputmode="numeric" maxlength="6" autofocus>
            <div class="flex gap-3">
                <button id="cancel-pin" class="flex-1 text-[10px] font-black uppercase text-slate-400">Cancel</button>
                <button id="confirm-pin-btn" class="flex-1 btn-primary h-12 text-xs">Verify</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancel-pin').onclick = () => modal.remove();
    document.getElementById('confirm-pin-btn').onclick = async () => {
        const input = document.getElementById('guard-pin').value;
        const hashedInput = await hashString(input);
        if (hashedInput === userData.pinHash) {
            modal.remove();
            callback();
        } else {
            alert("Incorrect PIN");
        }
    };
}
