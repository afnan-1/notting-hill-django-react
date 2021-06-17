import React from "react";
import Button from "@material-ui/core/Button";
import GuidesForm from "../components/GuidesForm";
function PdfDisplay({pdf}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="portfolio-item">
        <div className="hover-bg">
          <div className="hover-text">
            <Button variant="contained" className="bg-success text-light">
            <i class="fa fa-download mr-2"></i>
              <GuidesForm pdf={pdf} />
            </Button>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/World_Association_of_Girl_Guides_and_Girl_Scouts_flag.svg/1200px-World_Association_of_Girl_Guides_and_Girl_Scouts_flag.svg.png"
            className="img-responsive guidesImage"
            alt="Project Title"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default PdfDisplay;
