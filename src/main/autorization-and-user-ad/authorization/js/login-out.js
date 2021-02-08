async function fetchLoginOut() {
    await axios.post('/auth/logout');
};