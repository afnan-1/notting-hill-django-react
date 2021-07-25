import React, { useRef, useState } from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import { Container, Button, Grid } from "@material-ui/core";
import { FileDrop } from "react-file-drop";
// import "../../static/dashboard.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
function UploadDocuments() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const onFileInputChange = (event) => {
    const { files } = event.target;
    setFileName(files[0].name);
    // do something with your files...
  };
  const onTargetClick = () => {
    fileInputRef.current.click();
  };
  return (
    <SideMenu>
      <Container className="mt-5" maxWidth="md">
        <h4 className="mt-3"> Hello Moktar,What needs to be signed?</h4>

        <h4 className="mt-5">Select Documents</h4>

        <div
          className="p-5"
          style={{ borderStyle: "dotted", borderColor: "#E3E3E3" }}
        >
          <Grid container alignItems="center" alignContent="center" spacing={3}>
            <Grid item sm={6} className="border-right">
              <div
                className="border text-center"
                style={{ borderColor: "grey" }}
              >
                <input
                  onChange={onFileInputChange}
                  ref={fileInputRef}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  style={{ display: "none" }}
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    className="pt-2 px-5 mt-2"
                    fullWidth
                    color="primary"
                    component="span"
                  >
                    Upload File
                  </Button>
                </label>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div className=" p-3 text-center">
                <FileDrop
                  className="text-center"
                  onFrameDragEnter={(event) =>
                    console.log("onFrameDragEnter", event)
                  }
                  onFrameDragLeave={(event) =>
                    console.log("onFrameDragLeave", event)
                  }
                  onFrameDrop={(event) => console.log("onFrameDrop", event)}
                  onDragOver={(event) => console.log("onDragOver", event)}
                  onDragLeave={(event) => console.log("onDragLeave", event)}
                  onDrop={(files, event) => setFileName(files[0].name)}
                  onTargetClick={onTargetClick}
                >
                  <div className="d-flex justify-content-center">
                    <i>
                      {" "}
                      <ArrowDropDownCircleOutlinedIcon color="primary" />
                    </i>
                    <p className="ml-1">Drag and drop files here</p>
                  </div>
                </FileDrop>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="mt-5" style={{ maxWidth: "400px" }}>
          <h4>Documents you've selected</h4>
          <h6>Drag and drop documents to reorder them</h6>
          <BorderLinearProgress variant="determinate" value={50} />
          <p>
            <small>uploading:{fileName}</small>
          </p>
        </div>
      </Container>
    </SideMenu>
  );
}

export default UploadDocuments;
