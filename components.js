/* Trust Bank (TB) Reusable Shared Components */

export const renderNav = (activePage = 'home') => {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;

    const items = [
        { id: 'home', icon: 'fa-th-large', label: 'Home', link: 'dashboard.html' },
        { id: 'transfers', icon: 'fa-exchange-alt', label: 'Move', link: 'transfer.html' },
        { id: 'cards', icon: 'fa-credit-card', label: 'Cards', link: 'cards.html' },
        { id: 'settings', icon: 'fa-user-cog', label: 'Security', link: 'settings.html' }
    ];

    nav.innerHTML = `
        <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center z-[1000] tb-shadow">
            ${items.map(item => `
                <a href="${item.link}" class="flex flex-col items-center gap-1 no-underline">
                    <i class="fas ${item.icon} text-lg ${activePage === item.id ? 'text-[#002147]' : 'text-slate-300'}"></i>
                    <span style="font-size: 9px; font-weight: 900; text-transform: uppercase;" class="${activePage === item.id ? 'text-[#002147]' : 'text-slate-400'}">${item.label}</span>
                </a>
            `).join('')}
        </div>
    `;
};

export const renderHeader = (title) => {
    const header = document.getElementById('app-header');
    if (!header) return;

    header.innerHTML = `
        <div class="p-6 flex justify-between items-center sticky top-0 bg-white z-[900] border-b border-slate-50">
            <button onclick="history.back()" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <i class="fas fa-chevron-left"></i>
            </button>
            <h1 class="text-xs font-black uppercase tracking-widest text-[#002147]">${title}</h1>
            <div class="w-10"></div>
        </div>
    `;
};
