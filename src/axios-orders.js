import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burger-builder-c6f78.firebaseio.com/'
});

export default instance