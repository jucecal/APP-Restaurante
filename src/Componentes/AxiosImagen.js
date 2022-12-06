import axios from "axios";

const AxiosImagen = axios.create({
    baseURL: 'http://192.168.0.3:3001/api/',
    timeout: 10000,
    headers: { 
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data' 
    }
});

export default AxiosImagen;