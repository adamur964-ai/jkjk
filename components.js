export const renderHeader = (title, showBack = false) => `
    <header class="px-6 py-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-40">
        <div class="flex items-center gap-4">
            ${showBack ? `<button onclick="history.back()" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i class="fa-solid fa-arrow-left"></i></button>` : ''}
            <h1 class="text-xl font-black text-[#002147] tracking-tight">${title}</h1>
        </div>
        <a href="notifications.html" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 relative">
            <i class="fa-solid fa-bell"></i>
        </a>
    </header>
`;

export const renderBottomNav = (activeTab) => {
    const tabs = [
        { id: 'dashboard', icon: 'fa-house', label: 'Home', link: 'dashboard.html' },
        { id: 'transactions', icon: 'fa-list-ul', label: 'History', link: 'transactions.html' },
        { id: 'transfer', icon: 'fa-paper-plane', label: 'Send', link: 'transfer.html' },
        { id: 'settings', icon: 'fa-user-gear', label: 'Settings', link: 'settings.html' }
    ];
    return `
        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center z-40">
            ${tabs.map(tab => `
                <a href="${tab.link}" class="flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-[#002147]' : 'text-slate-300'}">
                    <i class="fa-solid ${tab.icon} text-xl"></i>
                    <span class="text-[9px] font-black uppercase tracking-widest">${tab.label}</span>
                </a>
            `).join('')}
        </nav>
    `;
};

export const renderStatusBadge = (status) => {
    const colors = {
        PENDING: 'bg-amber-50 text-amber-600 border-amber-100',
        SUCCESSFUL: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        APPROVED: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        VERIFIED: 'bg-blue-50 text-blue-600 border-blue-100',
        DECLINED: 'bg-rose-50 text-rose-600 border-rose-100',
        FAILED: 'bg-rose-50 text-rose-600 border-rose-100',
        active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        restricted: 'bg-rose-50 text-rose-600 border-rose-100',
        frozen: 'bg-slate-900 text-white border-slate-800'
    };
    const s = status?.toUpperCase() || 'PENDING';
    return `<span class="px-3 py-1 rounded-lg border ${colors[s] || colors.PENDING} text-[9px] font-black uppercase tracking-widest">${s}</span>`;
};

export const renderEmptyState = (msg) => `
    <div class="py-12 text-center space-y-3">
        <i class="fa-solid fa-folder-open text-3xl text-slate-200"></i>
        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">${msg}</p>
    </div>
`;

export const renderRestrictedBanner = (title, msg) => `
    <div class="mb-6 p-4 bg-rose-600 rounded-3xl text-white fade-in shadow-lg shadow-rose-900/20">
        <div class="flex items-center gap-3 mb-1">
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text-[10px] font-black uppercase tracking-widest">${title}</p>
        </div>
        <p class="text-xs font-medium opacity-90">${msg}</p>
    </div>
`;
