export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
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
    return accNum.toString().replace(/(\d{4})(\d{4})(\d{2})/, 'TB $1 $2 $3');
};

export const generateReference = () => {
    return 'TRX-' + Math.random().toString(36).toUpperCase().substring(2, 10);
};

export const compressImage = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 600;
                const scaleSize = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
        };
    });
};

export const getRestrictionInfo = (status) => {
    const data = {
        restricted: status === 'restricted' || status === 'frozen',
        title: status === 'restricted' ? 'Account Restricted' : 'Account Frozen',
        message: status === 'restricted' 
            ? 'Your account is under review. Outgoing transfers are temporarily disabled.' 
            : 'Access to funds has been frozen. Please contact support.'
    };
    return data;
};
