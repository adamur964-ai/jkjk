/* Trust Bank (TB) Notification System */

export const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `fixed top-5 right-5 z-[10000] px-6 py-3 rounded-lg text-white font-bold shadow-2xl transition-all duration-300 transform translate-y-[-20px] opacity-0`;
    
    const colors = {
        success: 'bg-emerald-500',
        error: 'bg-rose-500',
        info: 'bg-blue-500'
    };
    
    toast.classList.add(colors[type]);
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-[-20px]', 'opacity-0');
    }, 10);
    
    // Remove
    setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
};
