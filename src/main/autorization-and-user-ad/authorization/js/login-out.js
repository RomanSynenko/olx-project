async function fetchLoginOut() {
    try {
        await axios.post('/auth/logout');
        localStorage.clear();
    } catch { };
};