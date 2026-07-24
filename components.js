export const renderHeader = (title, showBack = false) => `
    <header class="flex items-center justify-between px-6 py-8 bg-white border-b border-slate-100">
        <div class="flex items-center gap-4">
            ${showBack ? `<button onclick="history.back()" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#002147]"><i class="fa-solid fa-chevron-left"></i></button>` : ''}
            <h1 class="text-xl font-black text-[#002147] tracking-tight">${title}</h1>
        </div>
        <div class="w-10 h-10 bg-[#002147] rounded-xl flex items-center justify-center">
            <span class="text-[#D4AF37] font-black text-xs">TB</span>
        </div>
    </header>
`;

export const renderBottomNav = (active = 'dashboard') => {
    const items = [
        { id: 'dashboard', icon: 'fa-house', label: 'Home', link: 'dashboard.html' },
        { id: 'transfer', icon: 'fa-paper-plane', label: 'Send', link: 'transfer.html' },
        { id: 'transactions', icon: 'fa-list-ul', label: 'Activity', link: 'transactions.html' },
        { id: 'settings', icon: 'fa-user-gear', label: 'Profile', link: 'settings.html' }
    ];
    return `
        <nav class="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-6 py-4 flex justify-between items-center z-50">
            ${items.map(item => `
                <a href="${item.link}" class="flex flex-col items-center gap-1 ${active === item.id ? 'text-[#002147]' : 'text-slate-300'}">
                    <i class="fa-solid ${item.icon} text-lg"></i>
                    <span class="text-[9px] font-black uppercase tracking-widest">${item.label}</span>
                </a>
            `).join('')}
        </nav>
    `;
};

export const renderStatusBadge = (status) => {
    const colors = {
        'PENDING': 'bg-amber-50 text-amber-600 border-amber-100',
        'APPROVED': 'bg-emerald-50 text-emerald-600 border-emerald-100',
        'VERIFIED': 'bg-emerald-50 text-emerald-600 border-emerald-100',
        'DECLINED': 'bg-rose-50 text-rose-600 border-rose-100',
        'REJECTED': 'bg-rose-50 text-rose-600 border-rose-100',
    };
    return `<span class="px-3 py-1 rounded-full text-[9px] font-black uppercase border ${colors[status] || 'bg-slate-50 text-slate-400'}">${status}</span>`;
};

export const renderDeclinedBanner = (reason) => `
    <div class="mb-6 p-5 bg-rose-50 border border-rose-100 rounded-[2rem]">
        <p class="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Request Declined</p>
        <p class="text-xs font-bold text-rose-800 leading-relaxed mb-3">${reason || 'Information provided was insufficient.'}</p>
        <p class="text-[9px] font-medium text-rose-600">Please contact <a href="support.html" class="underline font-black">support</a> for assistance.</p>
    </div>
`;

export const renderApprovedSuccess = (message, action) => `
    <div class="text-center py-12 px-6 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl">
        <div class="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
            <i class="fa-solid fa-check text-4xl"></i>
        </div>
        <h2 class="text-2xl font-black text-[#002147] mb-2">Success!</h2>
        <p class="text-slate-500 text-sm mb-10">${message}</p>
        <div class="flex flex-col gap-4">
            <button onclick="location.reload()" class="btn-primary h-14">Make Another</button>
            <a href="dashboard.html" class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Back to Dashboard</a>
        </div>
    </div>
`;

export const renderEmptyState = (msg) => `
    <div class="py-20 text-center">
        <i class="fa-solid fa-folder-open text-4xl text-slate-100 mb-4"></i>
        <p class="text-[10px] font-black uppercase text-slate-300 tracking-widest">${msg}</p>
    </div>
`;
