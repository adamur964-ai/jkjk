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

export const renderBottomNav = (active) => {
    const navs = [
        { id: 'dashboard', icon: 'fa-house', label: 'Home', link: 'dashboard.html' },
        { id: 'transactions', icon: 'fa-list-ul', label: 'History', link: 'transactions.html' },
        { id: 'transfer', icon: 'fa-paper-plane', label: 'Send', link: 'transfer.html' },
        { id: 'settings', icon: 'fa-user-gear', label: 'Settings', link: 'settings.html' }
    ];
    return `
        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center z-40">
            ${navs.map(n => `
                <a href="${n.link}" class="flex flex-col items-center gap-1 ${active === n.id ? 'text-[#002147]' : 'text-slate-300'}">
                    <i class="fa-solid ${n.icon} text-xl"></i>
                    <span class="text-[9px] font-black uppercase tracking-widest">${n.label}</span>
                </a>
            `).join('')}
        </nav>
    `;
};

export const renderStatusBadge = (status) => {
    const s = status?.toUpperCase() || 'PENDING';
    const colors = { PENDING: 'bg-amber-50 text-amber-600', SUCCESSFUL: 'bg-emerald-50 text-emerald-600', VERIFIED: 'bg-blue-50 text-blue-600', DECLINED: 'bg-rose-50 text-rose-600' };
    return `<span class="px-3 py-1 rounded-lg text-[9px] font-black uppercase ${colors[s] || colors.PENDING}">${s}</span>`;
};

export const renderEmptyState = (msg) => `<div class="py-20 text-center text-slate-400 text-xs font-bold uppercase">${msg}</div>`;

export const renderRestrictedBanner = (title, msg) => `
    <div class="mb-6 p-4 bg-rose-600 text-white rounded-3xl">
        <p class="text-[10px] font-black uppercase mb-1">${title}</p>
        <p class="text-xs opacity-90">${msg}</p>
    </div>
`;
