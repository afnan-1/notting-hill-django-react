import axios from 'axios'
export const sendEmail = async(name,message)=>{
    const config={
        headers: {
            'Content-type': 'application/json',
        }
    }
 await axios.post('http://localhost:8000/contactus/sendingemail/',{name,message},config)
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

