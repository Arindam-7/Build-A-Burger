import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-a-burger-abc9e.firebaseio.com/'
});

export default instance;