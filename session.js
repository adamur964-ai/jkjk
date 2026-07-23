/**
 * TB Bank Session Caching
 */

const SESSION_KEY = 'tb_user_session';

export const saveSession = (userData) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
        ...userData,
        lastUpdated: Date.now()
    }));
};

export const getSession = () => {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};

export const updateSessionField = (field, value) => {
    const session = getSession();
    if (session) {
        session[field] = value;
        saveSession(session);
    }
};
