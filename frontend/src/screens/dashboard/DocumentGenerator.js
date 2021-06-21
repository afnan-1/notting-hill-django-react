import React, { useState } from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import Stepper from "../../components/dashboard/Stepper";
import UserBasicInfo from "../../components/dashboard/UserBasicInfo";
import QuillEditor from "../../components/dashboard/QuillEditor";
import html2canvas from "html2canvas";
import ReactQuill from 'react-quill'; // ES6
import {jsPDF} from 'jspdf'
import 'react-quill/dist/quill.snow.css'; // ES6

function DocumentGenerator() {
  const [template,setTemplate] = useState("")
  const handleChange=(value)=>{
    setTemplate(value)
  }
  const a = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);  // if you want see your screenshot in body.
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save("download.pdf"); 
  });
  };
  return (
    <SideMenu>
      <Stepper>
        <UserBasicInfo />
        <div id="capture">
          {" "}
          <h1>hello world</h1>{" "}
        </div>
        <button onClick={a}>hello</button>
        <QuillEditor />
        {/* <ReactQuill theme="snow" value={template}
                  onChange={handleChange} /> */}
      </Stepper>
    </SideMenu>
  );
}

export default DocumentGenerator;
