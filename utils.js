/* Trust Bank (TB) Shared Utilities */

export const formatCurrency = (amount, currency = 'USD') => {
    const locales = { 'USD': 'en-US', 'EUR': 'de-DE', 'GBP': 'en-GB' };
    return new Intl.NumberFormat(locales[currency] || 'en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
};

export const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const maskAccountNumber = (accNum) => {
    if (!accNum) return '****';
    return '****' + accNum.slice(-4);
};

export const generateRef = () => {
    return 'TB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};
