import React from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import { Container, Grid } from "@material-ui/core";
import Stepper from "../../components/dashboard/Stepper";
import UserBasicInfo from "../../components/dashboard/UserBasicInfo";
import FileViewer from "react-file-viewer";
import pdf from "../../static/pdfs/pdf1.pdf";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
DocumentEditorContainerComponent.Inject(Toolbar);

function DocumentEditor() {
  const type = "pdf";
  return (
    <SideMenu>
      {/* <div className="mt-5"> */}
        <Container className="mt-5" >
          <Grid container>
            <Grid item sm={12}>
              <DocumentEditorContainerComponent
                id="container"
                serviceUrl={pdf}
                style={{ height: "590px" }}
                enableToolbar={true}
              />
            </Grid>
          </Grid>
        </Container>
      {/* </div> */}
    </SideMenu>
  );
}

export default DocumentEditor;
