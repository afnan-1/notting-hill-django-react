import React, { createRef, useState } from "react";
import RichTextEditor, {
  getTextAlignClassName,
  getTextAlignStyles,
  getTextAlignBlockMetadata,
} from "react-rte";
import { Markup } from "interweave";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function QuillEditor(props) {
  const [state, setState] = useState({
    value: RichTextEditor.createValueFromString("", "html", {
      customBlockFn: getTextAlignBlockMetadata,
    }),
  });
  const pdfExportComponent = createRef();
  const handleExportWithComponent = (event) => {

    let element = pdfExportComponent.current;
    savePDF(element, {
      paperSize: "a4",
      margin: 40,
      fontSize:"10px",
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };
  const onChange = (value) => {
    setState({ value });
    if (props.onChange) {
      props.onChange(
        value.toString("html", {
          blockStyleFn: getTextAlignStyles,
        })
      );
    }
  };

  return (
    <>
      {/* <PDFExport ref={pdfExportComponent} paperSize="A4"> */}
      <div ref={pdfExportComponent} id="pdf" className="position-absolute" style={{zIndex:-1}}>
        <Markup
          content={state.value.toString("html", {
            blockStyleFn: getTextAlignStyles,
          })}
        />
        {console.log(state.value.fontSize)}
      </div>
      {/* </PDFExport> */}
      <button primary={true} onClick={handleExportWithComponent}>
        Export with Component
      </button>

      <div style={{ width: "803px", height: "1132px" }}>
        <RichTextEditor
          value={state.value}
          onChange={onChange}
          blockStyleFn={getTextAlignClassName}
        />
      </div>
    </>
  );
}
