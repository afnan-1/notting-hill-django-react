import axiosInstance from "../axios";
import axios from "axios";
export const login = async (body) => {
  try {
    const response = await axiosInstance.post("/users/login/", body);
    localStorage.setItem('userInfo',JSON.stringify(response.data))
    return response;
  } catch (error) {
       return error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
  }
};

export const logout=()=>{
  localStorage.removeItem("userInfo")
}

export const checkAuthenticated=()=>{
if (localStorage.getItem("userInfo")){
  return true;
}else{
  return false;
}
}