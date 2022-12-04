import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://192.168.1.11:3001/api/',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
});

export default Axios;