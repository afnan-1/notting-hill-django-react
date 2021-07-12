import axiosInstance from "../axios";

export const register = async (body) => {
  try {
    const response = await axiosInstance.post("/users/", body);
    return response;
  } catch (error) {
    return error.response && error.response.data.detail
      ? error.response.data.detail
      : error.message;
  }
};
export const login = async (body) => {
  try {
    const response = await axiosInstance.post("/users/login/", body);
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    return response;
  } catch (error) {
    return error.response && error.response.data.detail
      ? error.response.data.detail
      : error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("userInfo");
};

export const checkAuthenticated = () => {
  if (localStorage.getItem("userInfo")) {
    return true;
  } else {
    return false;
  }
};

export const forgotPassword = async (email) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const response = await axiosInstance.post(
      "/users/password_reset/",
      { email: email },
      config
    );
    return response;
  } catch (error) {
    return error.response && error.response.data.detail
      ? error.response.data.detail
      : error.message;
  }
};

export const newPassword = async (password, token) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const response = await axiosInstance.post(
      "/users/password_reset/confirm/",
      { password: password, token: token },
      config
    );
    return response;
  } catch (error) {
    return error.response
  }
};
