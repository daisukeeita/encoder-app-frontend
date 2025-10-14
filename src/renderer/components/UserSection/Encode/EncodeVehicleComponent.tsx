import React, { useState } from "react";

import InsuranceComponent from "../Insurance/InsuranceComponent";
import SearchVehicle from "../../SearchVehicle";
import VehicleDetails from "../../VehicleDetails";
import { VehicleDetailsContextProvider } from "../../../contexts/VehicleDetailsContext";

const EncodeVehicleComponent = () => {
  const [selectTab, setSelectTab] = useState('insurance_component');

  return (
    <div className="bg-base-100 border-base-300 p-6 h-full w-full">
      <VehicleDetailsContextProvider>
        <div className='mx-auto w-5/6 font-sans'>
            <SearchVehicle />
        <div className='tabs tabs-box tabs-top mt-5'>
          <input 
            type="radio" 
            name="vehicle_details" 
            className="tab" 
            aria-label="Vehicle Details"
            checked={selectTab === 'vehicle_details'}
            onChange={event => setSelectTab(event.target.name)} 
          />
          <VehicleDetails />

          <input 
            type="radio" 
            name="insurance_component" 
            className="tab" 
            aria-label="Insurance Component" 
            checked={selectTab === 'insurance_component'}
            onChange={event => setSelectTab(event.target.name)}
          />
          <InsuranceComponent />
        </div>
        </div>
      </VehicleDetailsContextProvider>
    </div>
  );
};

export default EncodeVehicleComponent;