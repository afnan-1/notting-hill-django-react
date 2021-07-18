import axiosInstance from "../../axios";

// export const login = (body) => async (dispatch) => {
//     try {
//       dispatch({
//         type: USER_LOGIN_REQUEST,
//       });
  
//       const { data } = await axiosInstance.post("/users/login/", body);
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         payload: data,
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//     } catch (error) {
//       dispatch({
//         type: USER_LOGIN_FAIL,
//         payload:
//           error.response && error.response.data.detail
//             ? error.response.data.detail
//             : error.message,
//       });
//     }
//   };

export const sendEmail = async(name,message)=>{
    await axiosInstance.post('/contactus/sendingemail/',{name,message})
}
export const contactUs = async(body)=>{
 const {data} = await axiosInstance.post('/contactus/',body)
 return data
}