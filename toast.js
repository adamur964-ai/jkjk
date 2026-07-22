/* Trust Bank (TB) Global Notification Component */

export const notify = (msg, type = 'success') => {
    const container = document.getElementById('toast-container') || createContainer();
    const toast = document.createElement('div');
    
    const colors = {
        success: '#10b981',
        error: '#f43f5e',
        info: '#0ea5e9'
    };

    toast.style.cssText = `
        background: white;
        color: #1e293b;
        border-left: 6px solid ${colors[type]};
        padding: 16px 24px;
        margin-bottom: 10px;
        border-radius: 12px;
        font-weight: 800;
        font-size: 13px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        text-transform: uppercase;
        animation: toastIn 0.4s ease forwards;
    `;

    toast.innerText = msg;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
};

const createContainer = () => {
    const div = document.createElement('div');
    div.id = 'toast-container';
    div.style.cssText = 'position:fixed; top:20px; right:20px; z-index:99999; width: 300px;';
    document.body.appendChild(div);
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes toastIn { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes toastOut { to { opacity: 0; transform: translateX(50px); } }
    `;
    document.head.appendChild(style);
    return div;
};
