import axios from 'axios';

function checkUserLoginIn() {
    const refresh = localStorage.getItem("refreshToken");
    
    if (!refresh) {
        return;
    };
    
    fetchCheckUserLoginIn(refresh);
};

async function fetchCheckUserLoginIn(refreshToken) {
    const sid = localStorage.getItem("sid");

    let AUTH_TOKEN = `Bearer ${JSON.parse(refreshToken)}`;
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    const body = {
        "sid": JSON.parse(sid)
    };
    
    try {
        const { data } = await axios.post('/auth/refresh', body);

        localStorage.setItem("accessToken", JSON.stringify(data.newAccessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.newRefreshToken));
        localStorage.setItem("sid", JSON.stringify(data.newSid));

        AUTH_TOKEN = `Bearer ${data.newAccessToken}`;
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        
    } catch (error) {
        if (error.message === 'Request failed with status code 404') {
            // const userAdBtnRef = document.querySelector('button[name="user-ad"]');
            // userAdBtnRef.disabled = true;
        };
    };

}

export default checkUserLoginIn; 