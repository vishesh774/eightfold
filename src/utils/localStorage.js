export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getItem = (key) => {
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val) : {};
}