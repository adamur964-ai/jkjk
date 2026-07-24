export const renderWorkflowStatus = (status, type, declineReason = "", onReset) => {
    if (status === 'PENDING') {
        return `
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-[2rem] text-center space-y-4 animate-pulse">
                <i class="fa-solid fa-clock-rotate-left text-3xl text-amber-500"></i>
                <h3 class="font-black text-amber-900 uppercase text-xs tracking-widest">Request Under Review</h3>
                <p class="text-xs text-amber-700">Federal auditors are verifying this ${type}. Please wait.</p>
            </div>`;
    }
    if (status === 'DECLINED') {
        return `
            <div class="bg-rose-50 border border-rose-200 p-6 rounded-[2rem] mb-6">
                <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-circle-exclamation text-rose-500"></i>
                    <h3 class="font-black text-rose-900 uppercase text-xs tracking-widest">Request Declined</h3>
                </div>
                <p class="text-xs text-rose-700 mb-3 font-bold">Reason: ${declineReason || 'Information mismatch.'}</p>
                <p class="text-[10px] text-rose-600 mb-4 uppercase">Please contact <a href="support.html" class="underline font-black">Support</a> for further assistance.</p>
                <button onclick="${onReset}" class="text-[10px] font-black uppercase tracking-widest bg-rose-500 text-white px-4 py-2 rounded-lg">Try Again</button>
            </div>`;
    }
    if (status === 'APPROVED') {
        return `
            <div class="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center space-y-6 shadow-xl">
                <div class="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <i class="fa-solid fa-check text-3xl"></i>
                </div>
                <div>
                    <h3 class="font-black text-[#002147] text-xl uppercase tracking-tighter">Success!</h3>
                    <p class="text-slate-500 text-sm">Your ${type} has been approved and processed.</p>
                </div>
                <div class="flex flex-col gap-3">
                    <button onclick="${onReset}" class="btn-primary h-14">Make Another Request</button>
                    <a href="dashboard.html" class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Back to Dashboard</a>
                </div>
            </div>`;
    }
    return '';
};
