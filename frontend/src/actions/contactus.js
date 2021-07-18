import axios from 'axios'
export const sendEmail = async(name,message)=>{
 await axios.post('http://localhost:8000/contactus/sendingemail/',{name,message})
}

export const contactUs = async(body)=>{
    const config={
        headers: {
            'Content-type': 'application/json',
        }
    }
 const {data} = await axios.post('http://localhost:8000/contactus/',body,config)
 return data
}

