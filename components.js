/**
 * TB Bank Shared UI Components
 */

export const renderHeader = (title, showBack = false) => {
    return `
        <header class="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40">
            <div class="flex items-center gap-4">
                ${showBack ? '<button onclick="history.back()" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 transition-colors"><i class="fa-solid fa-arrow-left"></i></button>' : ''}
                <h1 class="text-xl font-black text-[#002147] tracking-tight">${title}</h1>
            </div>
            <div id="header-action"></div>
        </header>
    `;
};

export const renderBottomNav = (activeTab) => {
    const tabs = [
        { id: 'dashboard', icon: 'fa-house', label: 'Home', link: 'dashboard.html' },
        { id: 'transactions', icon: 'fa-list-ul', label: 'History', link: 'transactions.html' },
        { id: 'transfer', icon: 'fa-paper-plane', label: 'Transfer', link: 'transfer.html' },
        { id: 'notifications', icon: 'fa-bell', label: 'Alerts', link: 'notifications.html' },
        { id: 'settings', icon: 'fa-user', label: 'Profile', link: 'settings.html' }
    ];

    return `
        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-3 flex justify-around items-center z-40 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            ${tabs.map(tab => `
                <a href="${tab.link}" class="flex flex-col items-center gap-1 group">
                    <div class="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 
                        ${activeTab === tab.id ? 'bg-[#002147] text-[#D4AF37] shadow-lg shadow-navy-200/50' : 'text-slate-400 group-hover:bg-slate-50 group-hover:text-slate-600'}">
                        <i class="fa-solid ${tab.icon} text-lg"></i>
                    </div>
                    <span class="text-[10px] font-black uppercase tracking-wider ${activeTab === tab.id ? 'text-[#002147]' : 'text-slate-400'}">${tab.label}</span>
                </a>
            `).join('')}
        </nav>
    `;
};

export const renderStatusBadge = (status) => {
    const styles = {
        'PENDING': 'bg-amber-50 text-amber-700 border-amber-200',
        'SUCCESSFUL': 'bg-emerald-50 text-emerald-700 border-emerald-200',
        'APPROVED': 'bg-emerald-50 text-emerald-700 border-emerald-200',
        'VERIFIED': 'bg-blue-50 text-blue-700 border-blue-200',
        'DECLINED': 'bg-rose-50 text-rose-700 border-rose-200',
        'REJECTED': 'bg-rose-50 text-rose-700 border-rose-200',
        'FAILED': 'bg-slate-100 text-slate-700 border-slate-200'
    };
    const s = status ? status.toUpperCase() : 'PENDING';
    return `<span class="px-3 py-1 rounded-full text-[10px] font-black tracking-widest border ${styles[s] || 'bg-slate-50 text-slate-600'}">${s}</span>`;
};

export const renderSkeleton = () => `
    <div class="animate-pulse flex flex-col gap-4">
        <div class="h-32 bg-slate-100 rounded-3xl w-full"></div>
        <div class="h-12 bg-slate-50 rounded-2xl w-3/4"></div>
        <div class="h-12 bg-slate-50 rounded-2xl w-full"></div>
    </div>
`;

export const renderEmptyState = (msg) => `
    <div class="flex flex-col items-center justify-center py-12 px-6 text-center">
        <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <i class="fa-solid fa-folder-open text-slate-300 text-3xl"></i>
        </div>
        <p class="text-slate-500 font-medium">${msg}</p>
    </div>
`;
