export const showToast = (message, type = 'info') => {
    const toast = document.createElement('div');
    toast.className = `fixed top-10 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-2xl text-white text-xs font-black uppercase tracking-widest shadow-2xl transition-all duration-300 transform translate-y-[-20px] opacity-0`;
    
    if (type === 'error') toast.classList.add('bg-rose-600');
    else if (type === 'success') toast.classList.add('bg-emerald-600');
    else toast.classList.add('bg-[#002147]');

    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-[-20px]', 'opacity-0');
    }, 100);

    setTimeout(() => {
        toast.classList.add('translate-y-[-20px]', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};
