import axios from 'axios';
axios.defaults.baseURL = 'https://callboard-backend.goit.global'

const btnRef = document.querySelector('.second');
btnRef.addEventListener('click', ac);

async function fetchUserLogin(dataForm) {
    const { data } = await axios.post('/auth/login', dataForm);
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));

    const AUTH_TOKEN = `Bearer ${data.accessToken}`
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    
    // const instance = axios.create({
    //     baseURL: 'https://callboard-backend.goit.global'
    // });
    // instance.defaults.headers.common['Authorization'] = `Bearer ${data.refreshToken}`;

    // const body = {
    //     "sid": data.sid
    // };

    // const { data: newData } = await instance.post('/auth/refresh', body);

    // localStorage.setItem("newAccessToken", JSON.stringify(newData.newAccessToken));
    
    // localStorage.setItem("refreshToken", JSON.stringify(newData.newRefreshToken));
    document.querySelector('.backdrop-add').remove();
};

function checkUserLoginIn() {
    const token = localStorage.getItem("accessToken");
    if (token) {
       const AUTH_TOKEN = `Bearer ${JSON.parse(token)}`
       axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }
}

checkUserLoginIn();



async function ac() {
    const data = await axios.get('/user')
    console.log(data);

}

export default fetchUserLogin;