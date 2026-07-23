/**
 * TB Bank Toast Notification System
 */

const styleToast = () => {
    if (document.getElementById('toast-container')) return;
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(container);
};

export const showToast = (message, type = 'info') => {
    styleToast();
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `
        pointer-events-auto px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 
        transform transition-all duration-300 translate-x-full
        ${type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 
          type === 'error' ? 'bg-rose-50 border border-rose-200 text-rose-800' : 
          'bg-slate-800 text-white'}
    `;

    const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-exclamation' : 'fa-info-circle';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span class="font-medium text-sm">${message}</span>
    `;

    container.appendChild(toast);

    // Animation in
    setTimeout(() => toast.classList.remove('translate-x-full'), 10);

    // Remove
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
};
