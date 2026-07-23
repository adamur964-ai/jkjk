/**
 * TB Bank Utilities
 */

export const formatCurrency = (amount, currency = 'USD') => {
    const symbols = { 'USD': '$', 'EUR': '€', 'GBP': '£' };
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `${symbols[currency] || '$'}${formatter.format(amount)}`;
};

export const formatDate = (timestamp) => {
    if (!timestamp) return '---';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const compressImage = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const maxSide = 800;

                if (width > height) {
                    if (width > maxSide) {
                        height *= maxSide / width;
                        width = maxSide;
                    }
                } else {
                    if (height > maxSide) {
                        width *= maxSide / height;
                        height = maxSide;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.6));
            };
        };
        reader.onerror = (error) => reject(error);
    });
};

export const convertCurrency = (amount, from, to, rates) => {
    if (from === to) return amount;
    // Basic conversion logic: (amount / fromRate) * toRate
    const baseAmount = amount / (rates[from] || 1);
    return baseAmount * (rates[to] || 1);
};

export const maskAccountNumber = (accNum) => {
    if (!accNum) return '****';
    return `****${accNum.toString().slice(-4)}`;
};
