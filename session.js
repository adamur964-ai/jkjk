/* Trust Bank (TB) Session Persistence */

const SESSION_KEY = 'tb_user_session';

export const saveUserSession = (userData) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

export const getUserSession = () => {
    const session = sessionStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
};

export const clearUserSession = () => {
    sessionStorage.removeItem(SESSION_KEY);
};
