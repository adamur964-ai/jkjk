/* Trust Bank (TB) Local Session Persistence */

const KEY = 'tb_user_session';

export const saveSession = (data) => {
    sessionStorage.setItem(KEY, JSON.stringify(data));
};

export const getSession = () => {
    const data = sessionStorage.getItem(KEY);
    return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
    sessionStorage.removeItem(KEY);
};
