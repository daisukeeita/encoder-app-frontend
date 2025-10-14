import React, { useContext, useState } from "react";
import { formDataToObject } from "../../../utils/formDataToObject";
import { VehicleDetailsContext } from "../../../contexts/VehicleDetailsContext";
import { logClientInfo } from "../../../services/logOutputs";
import requestInsurancePolicyNumber from "../../../services/RequestInsurancePolicyNumber";

const InsuranceComponent = () => {
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const {
    licensePlate,
    mvFileNo,
    chassisNo,
    engineNo,
    categoryType,
    modelYear,
    manufacturer,
    brand
  } = useContext(VehicleDetailsContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = formDataToObject(new FormData(event.currentTarget));
    
    const message = "Client is requesting for an Insurance Policy Number for: " + JSON.stringify(formData);

    logClientInfo(message);
    const response = requestInsurancePolicyNumber(formData);

    response.then(data => {
      setPolicyNumber(data.policyNumber)
      console.log(data);
    }).catch(error => {
      console.error(error.message);
    });
  }

  return (
    <div className="tab-content bg-base-100 border-base-300 p-6">

      <form method="POST" onSubmit={handleSubmit} className="grid grid-cols-2 items-start">
        <button className="btn btn-neutral col-start-2 ml-auto mr-4">Send to Insurer</button>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
          <legend className="fieldset-legend">Vehicle Owner</legend>

          <label className="label ml-4" htmlFor="owner_name">Owner Name</label>
          <input 
            type="text"
            name="owner_name"
            id="owner_name"
            className="input mx-auto"
            placeholder="Required"
            value={ownerName}
            onChange={event => setOwnerName(event.target.value)} 
          />

          <label className="label ml-4" htmlFor="owner_address">Owner Address</label>
          <input 
            type="text"
            name="owner_address"
            id="owner_address"
            className="input mx-auto"
            placeholder="Required"
            value={ownerAddress}
            onChange={event => setOwnerAddress(event.target.value)}
          />

          <label className="label ml-4" htmlFor="id_type">ID Type</label>
          <input
            type="text"
            name="id_type"
            id="id_type"
            className="input mx-auto"
            placeholder="Required"
            value={idType}
            onChange={event => setIdType(event.target.value)}
          />

          <label className="label ml-4" htmlFor="id_number">ID Number</label>
          <input
            type="text"
            name="id_number"
            id="id_number"
            className="input mx-auto" 
            placeholder="Required"
            value={idNumber}
            onChange={event => setIdNumber(event.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
          <legend className="fieldset-legend">Vehicle Details</legend>

          <label htmlFor="plate_no" className="label ml-4">Plate Number</label>
          <input 
            type="text"
            name="plate_no"
            id="plate_no"
            className="input mx-auto"
            placeholder="Requred"
            value={licensePlate}
            readOnly
          />

          <label className="label ml-4" htmlFor="mv_file_no">MV File Number</label>
          <input 
            type="text"
            name="mv_file_no"
            id="mv_file_no"
            className="input mx-auto"
            placeholder="Required"
            value={mvFileNo}
            readOnly
          />

          <label className="label ml-4" htmlFor="chassis_no">Chassis Number</label>
          <input 
            type="text"
            name="chassis_no"
            id="chassis_no"
            className="input mx-auto"
            placeholder="Required"
            value={chassisNo}
            readOnly
          />

          <label className="label ml-4" htmlFor="engine_no">Engine Number</label>
          <input 
            type="text"
            name="engine_no"
            id="engine_no"
            className="input mx-auto"
            placeholder="Required"
            value={engineNo}
            readOnly
          />

          <label className="label ml-4" htmlFor="vehicle_type">Vehicle Type</label>
          <input 
            type="text"
            name="vehicle_type"
            id="vehicle_type"
            className="input mx-auto"
            placeholder="Required"
            value={categoryType}
            readOnly
          />

          <label className="label ml-4" htmlFor="make">Vehicle Make</label>
          <input 
            type="text" 
            name="make" 
            id="make"
            className="input mx-auto"
            placeholder="Required"
            value={manufacturer}
            readOnly
          />

          <label className="label ml-4" htmlFor="model">Vehicle Model</label>
          <input 
            type="text" 
            name="model" 
            id="model" 
            className="input mx-auto"
            placeholder="Required"
            value={brand}
            readOnly
          />

          <label className="label ml-4" htmlFor="year">Model Year</label>
          <input 
            type="text" 
            name="year" 
            id="year"
            className="input mx-auto"
            placeholder="Required"
            value={modelYear}
            readOnly
          />
        </fieldset>
      </form>

      <div className="grid grid-cols-3">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="list-row">
            <div className="w-30">Policy Number:</div>
            <div className="uppercase font-semibold">{policyNumber}</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InsuranceComponent;