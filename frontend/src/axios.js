import axios from 'axios';

const baseURL = 'http://ec2-13-233-173-82.ap-south-1.compute.amazonaws.com:8000';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;