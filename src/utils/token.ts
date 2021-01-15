const tokenName = 'xxxx-xxx';

export const getAccessToken: () => string = (): string => {
    return localStorage.getItem(tokenName) || '';
};

export const setAccessToken = (token: string) => {
    return localStorage.setItem(tokenName, token);
};

export const removeAccessToken = () => {
    return localStorage.removeItem(tokenName);
};
