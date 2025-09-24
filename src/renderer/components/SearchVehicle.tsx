import React, { useState } from "react";
import fetchVehicleData from "../services/FetchVehicleData";
import VehicleDetails from "./VehicleDetails";

function formDataToObject(formData : FormData)  {
  return Object.fromEntries(formData.entries())
}

export default function SearchVehicle (){
  // TODO: CONVERT THIS INTO DROPDOWN STYLE

  const [plateNumber, setPlateNumber] = useState('');
  const [mvFileNumber, setMvFileNumber] = useState('');
  const [chassis, setChassis] = useState('');
  const [engine, setEngine] = useState('');
  const [vin, setVin] = useState('');

  const [inspectionID, setInspectionID] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [mvFileNo, setMvFileNo] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [color, setColor] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [modelYear, setModelYear] = useState('');


  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (event == null) {
      console.error("event is null.");
    } else {
      const formData = formDataToObject(new FormData(event.currentTarget));

      const vehicleData = fetchVehicleData(formData);

      vehicleData.then(data => {
        setInspectionID(data.inspectionId)
        setLicensePlate(data.licensePlate)
        setMvFileNo(data.mvFileNumber)
        setChassisNo(data.chassis)
        setEngineNo(data.engine)
        setColor(data.color)
        setCategoryType(data.categoryType)
        setFuelType(data.fuelType)
        setModelYear(data.modelYear)
      }) 
    }
  } 

  return (
    <>
      <form method="POST" onSubmit={ handleSubmit }>
        <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box grid-cols-4 grid-rows-2 pb-5 pt-4 px-5">
          <legend className="fieldset-legend font-semibold ml-8">SEARCH VEHICLE</legend>

          {/* PLATE NUMBER */}
          <div className="col-span-2 flex justify-center">         
            <input 
              type="text" 
              name="plate_no" 
              id="plate_no" 
              placeholder="Plate Number"
              className="input"
              value={ plateNumber }
              onChange={ e => setPlateNumber(e.target.value)}
            />
          </div>

          {/* MV FILE NUMBER */}
          <div className="col-span-2 flex justify-center">
            <input 
              type="text" 
              name="mv_file_no" 
              id="mv_file_no"
              placeholder="MV File Number"
              className="input"
              value={ mvFileNumber }
              onChange={ e => setMvFileNumber(e.target.value)}
            />
          </div>

          {/* CHASSIS */}
          <div className="col-span-2 flex justify-center">
            <input 
              type="text" 
              name="chassis_no" 
              id="chassis_no" 
              placeholder="Chassis"
              className="input"
              value={ chassis }
              onChange={ e => setChassis(e.target.value)}
            />
          </div>

          {/* ENGINE */}
          <div className="col-span-2 flex justify-center">
            <input 
              type="text" 
              name="engine_no" 
              id="engine_no" 
              placeholder="Engine"
              className="input"
              value={ engine }
              onChange={ e => setEngine(e.target.value)}
            />
          </div>

          <input 
            type="text" 
            name="vin_no" 
            id="vin_no" 
            style={{display: 'none'}}
            value={ vin }
            onChange={ e => setVin(e.target.value)}
          />

          <div className="col-start-4 col-span-1 flex justify-center" style={{display: 'none'}}>
            <button type="submit" className="btn btn-neutral btn-dash">Search</button>
          </div>
        </fieldset>
      </form>

      <VehicleDetails 
        inspectionID={inspectionID}
        licensePlate={licensePlate}
        mvFileNo={mvFileNo}
        chassisNo={chassisNo}
        engineNo={engineNo}
        color={color}
        categoryType={categoryType}
        fuelType={fuelType}
        modelYear={modelYear} 
      />
    </>
  )
}
