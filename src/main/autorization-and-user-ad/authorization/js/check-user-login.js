import axios from 'axios';

async function checkUserLoginIn() {
    const refresh = localStorage.getItem("refreshToken");
    const sid = localStorage.getItem("sid");

    if (!refresh) {
        return
    };
    
    let AUTH_TOKEN = `Bearer ${JSON.parse(refresh)}`
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    const body = {
        "sid": JSON.parse(sid)
    };

    const { data } = await axios.post('/auth/refresh', body);

    localStorage.setItem("accessToken", JSON.stringify(data.newAccessToken));
    localStorage.setItem("refreshToken", JSON.stringify(data.newRefreshToken));
    localStorage.setItem("sid", JSON.stringify(data.newSid));

    AUTH_TOKEN = `Bearer ${data.newAccessToken}`
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

export default checkUserLoginIn;