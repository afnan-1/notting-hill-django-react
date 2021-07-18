import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
function Loader() {
  const style = {
    top: "53%",
    transform: "translateY(-53%)",
    left: "46%",
  };
  return (
    <div className="position-absolute" style={style}>
      <div className="d-flex flex-column align-items-center">
        <div>
          <CircularProgress />
        </div>
        <span className="nml-2">loading..</span>
      </div>
    </div>
  );
}
export default Loader;
