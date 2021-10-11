import axios from 'axios';

const Axios = (accessToken = null) => {
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api/auth',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}

export default Axios;