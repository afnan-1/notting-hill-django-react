// import React, { useState } from "react";
// import { Page } from "react-pdf";
// import { Document } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import pdf1 from "../static/pdfs/pdf1.pdf";
// export default function PdfDisplay() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       {/* <Document file={pdf1} download onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p> */}
//       {/* <object data={pdf1} type="application/pdf" width="300" height="200"> */}
// <a href={pdf1} download>test.pdf</a>
// {/* </object> */}
// <embed
//     src={pdf1}
//     type="application/pdf"
//     frameBorder="0"
//     scrolling="auto"
//     height="100%"
//     width="100%"
// ></embed>
// <iframe
//     src={pdf1}
//     frameBorder="0"
//     scrolling="auto"
//     height="100%"
//     width="100%"
// ></iframe>
//     </div>
//   );
// }
