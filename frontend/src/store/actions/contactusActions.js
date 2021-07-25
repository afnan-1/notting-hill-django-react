import axiosInstance from "../../axios";
export const sendEmail = async(name,message)=>{
    await axiosInstance.post('/api/contactus/sendingemail/',{name,message})
}
export const contactUs = async(body)=>{
 const {data} = await axiosInstance.post('/api/contactus/',body)
 return data
}