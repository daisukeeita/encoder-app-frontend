import React, { useContext } from "react";
import { SelectTabContext } from "../../contexts/SelectTabContext";
import DashboardComponent from "./Dashboard/DashboardComponent";
import EncodeVehicleComponent from "./Encode/EncodeVehicleComponent";
import { NavigationComponent } from "./Navigation/NavigationComponent";

const UserSectionComponent = () => {
  const { selectedTab } = useContext(SelectTabContext)

  return (
    <div className="box-border min-h-screen min-w-screen">
      <NavigationComponent />

      {selectedTab === "dashboard_component" ? <DashboardComponent /> : null}
      {selectedTab === "encode_vehicle" ? <EncodeVehicleComponent /> : null}
    </div>
  )
};

export default UserSectionComponent;