import axiosInstance from "../../axios";
export const sendEmail = async(name,message,visa,email,phone)=>{
    await axiosInstance.post('/api/contactus/sendingemail/',{name,message,email,visa,phone})
}
export const contactUs = async(body)=>{
 const {data} = await axiosInstance.post('/api/contactus/',body)
 return data
}