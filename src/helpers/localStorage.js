export const getLocal = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const setLocal = (data) => {
    return localStorage.setItem('tasks', JSON.stringify(data));
}
