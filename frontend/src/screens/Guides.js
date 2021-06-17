import React from "react";
import "../static/guides.scss";
import PdfDisplay from "../components/PdfDisplay";
import pdf1 from "../static/pdfs/pdf1.pdf";

function Guides() {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Guides</h2>
          <p>Fill the form to get the guides</p>
        </div>
        <div className="portfolio-items row">
          <PdfDisplay pdf={pdf1} />
          <PdfDisplay pdf={pdf1} />
          <PdfDisplay pdf={pdf1} />
          <PdfDisplay pdf={pdf1} />
          <PdfDisplay pdf={pdf1} />
          <PdfDisplay pdf={pdf1} />
        </div>
      </div>
    </div>
  );
}

export default Guides;
