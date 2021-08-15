import React,{useEffect} from "react";
import { useHistory} from "react-router-dom";
function NotFound404() {
    const history=useHistory()
    useEffect(()=>{
        history.push('/')
    },[])
  return (
    <div>
    
    </div>
  );
}

export default NotFound404;
