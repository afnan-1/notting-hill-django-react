import React from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import Stepper from "../../components/dashboard/Stepper";
import UserBasicInfo from "../../components/dashboard/UserBasicInfo";
function DocumentGenerator() {
  return (
    <SideMenu>
      <Stepper>
        <UserBasicInfo />
      </Stepper>
    </SideMenu>
  );
}

export default DocumentGenerator;
