export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
    }).format(amount || 0);
};

export const formatDate = (timestamp) => {
    if (!timestamp) return '---';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
    });
};

export const formatIBAN = (accNum) => {
    if (!accNum) return '---';
    return accNum.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
};

export const generateReference = () => {
    return 'TRX-' + Math.random().toString(36).toUpperCase().substring(2, 10);
};

export const compressImage = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 600;
                canvas.height = img.height * (600 / img.width);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
        };
    });
};

export const getRestrictionInfo = (status) => {
    return {
        restricted: status === 'restricted' || status === 'frozen',
        title: status === 'restricted' ? 'Action Required' : 'Account Frozen',
        message: status === 'restricted' ? 'Please complete your tax compliance.' : 'This account has been frozen.'
    };
};
