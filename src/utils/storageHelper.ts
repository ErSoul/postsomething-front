import jwt from "jwt-decode";

export const getItem = (key: string) => {
    const item = sessionStorage.getItem(key) || localStorage.getItem(key);
    return item;
};
  
export const setItem = (key: string, value: string, permanent: boolean) => {
    if (permanent)
        localStorage.setItem(key, value);

    sessionStorage.setItem(key, value);
};

export const unsetItem = (key: string) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
};

export const unsetAllItems = () => {
    localStorage.clear();
    sessionStorage.clear();
};