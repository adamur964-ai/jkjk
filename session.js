export const saveSession = (data) => {
    localStorage.setItem('tb_session', JSON.stringify(data));
};

export const getSession = () => {
    const data = localStorage.getItem('tb_session');
    return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
    localStorage.removeItem('tb_session');
};
