/* Trust Bank (TB) Reusable Components */

export const injectNavbar = (activePage) => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    nav.innerHTML = `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-20 flex justify-around items-center z-[5000] md:relative md:border-t-0 md:h-auto md:bg-transparent">
        <a href="dashboard.html" class="flex flex-col items-center ${activePage === 'home' ? 'text-navy-900' : 'text-gray-400'}">
            <i class="fas fa-th-large text-xl"></i>
            <span class="text-[10px] font-bold mt-1">Home</span>
        </a>
        <a href="transfer.html" class="flex flex-col items-center ${activePage === 'transfer' ? 'text-navy-900' : 'text-gray-400'}">
            <i class="fas fa-exchange-alt text-xl"></i>
            <span class="text-[10px] font-bold mt-1">Transfer</span>
        </a>
        <a href="transactions.html" class="flex flex-col items-center ${activePage === 'history' ? 'text-navy-900' : 'text-gray-400'}">
            <i class="fas fa-list-ul text-xl"></i>
            <span class="text-[10px] font-bold mt-1">History</span>
        </a>
        <a href="settings.html" class="flex flex-col items-center ${activePage === 'settings' ? 'text-navy-900' : 'text-gray-400'}">
            <i class="fas fa-cog text-xl"></i>
            <span class="text-[10px] font-bold mt-1">Settings</span>
        </a>
    </nav>`;
};
