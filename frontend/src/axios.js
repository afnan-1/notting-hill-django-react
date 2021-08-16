import axios from "axios";

// const baseURL = 'http://ec2-13-127-240-132.ap-south-1.compute.amazonaws.com';
const baseURL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
