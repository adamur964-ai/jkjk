/* Trust Bank (TB) Shared Utilities */

// 1. Currency Formatting
export const formatMoney = (amount, currency = 'USD') => {
    const formatters = {
        'USD': new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
        'EUR': new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
        'GBP': new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
    };
    return formatters[currency].format(amount || 0);
};

// 2. Mock Exchange Rate Logic (USD Base)
const RATES = { 'USD': 1.0, 'EUR': 0.92, 'GBP': 0.79 };
export const convertCurrency = (amount, from, to) => {
    const base = amount / RATES[from];
    return base * RATES[to];
};

// 3. Image Compression for Deposits
export const compressImage = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const scale = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
        };
    });
};

// 4. Reference ID Generator
export const generateRef = () => {
    return 'TBX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};
