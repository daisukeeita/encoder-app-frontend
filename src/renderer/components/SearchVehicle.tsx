import React, { useContext, useState } from "react";
import { VehicleDetailsContext } from "../contexts/VehicleDetailsContext";
import { formDataToObject } from "../utils/formDataToObject";
import fetchVehicleData from "../services/FetchVehicleData";
import { VehicleApiResult } from "./VehicleApiResult";
import { logClientError, logClientInfo } from "../services/logOutputs";

export default function SearchVehicle (){
  // TODO: CONVERT THIS INTO DROPDOWN STYLE
  const [plateNumber, setPlateNumber] = useState('');
  const [mvFileNumber, setMvFileNumber] = useState('');
  const [chassis, setChassis] = useState('');
  const [engine, setEngine] = useState('');
  const [vin, setVin] = useState('');

  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    setInspectionID, setLicensePlate,
    setMvFileNo,     setChassisNo,
    setEngineNo,     setColor, 
    setCategoryType, setFuelType,
    setModelYear,    setBrand,
    setManufacturer, setMaximumTotalWeight
  } = useContext(VehicleDetailsContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    logClientInfo(`Client searching for a vehicle details using: ${plateNumber === "" ? mvFileNumber : plateNumber}`);
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
        setManufacturer(data.manufacturer)
        setBrand(data.brand)
        setFuelType(data.fuelType)
        setModelYear(data.modelYear)
        setMaximumTotalWeight(data.maximumTotalWeight)

        logClientInfo(`${data.licensePlate} is successfully retrieved from LTMS.`);
        setSuccess(true);
        setIsPending(false);
    }).catch(error => {
        logClientError(error);
        setError(error);
        setIsPending(false);
    }).finally(() => {
        setIsPending( false);
        setPlateNumber('');
        setMvFileNumber('');
        setChassis('');
        setEngine('');
        setVin('');
        setTimeout(() => {
          setSuccess(false);
          setError(null);
        }, 5000);
    })
  };

  return (
    <>
      <form method="POST" onSubmit={ handleSubmit }>
        <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box grid-cols-4 grid-rows-2 pb-4 px-5">
          <legend className="fieldset-legend font-semibold ml-8">SEARCH VEHICLE</legend>

          {/* PLATE NUMBER */}
          <div className="col-span-2 flex justify-center">
            <label className="label mr-4" htmlFor="plate_no">
              Plate Number
            </label>
            <input 
              type="text" 
              name="plate_no" 
              id="plate_no" 
              placeholder="ABC1234 | 1234ABC"
              className="input validator"
              pattern="^([A-Z]{3} ?[0-9]{4})|([A-Z]{3} ?[0-9]{3})$"
              value={ plateNumber }
              onChange={ e => setPlateNumber(e.target.value)}
            />
          </div>

          {/* MV FILE NUMBER */}
          <div className="col-span-2 flex justify-center">
            <label className="label mr-4" htmlFor="mv_file_no">
              MV File Number
            </label>
            <input 
              type="text" 
              name="mv_file_no" 
              id="mv_file_no"
              placeholder="1234-0987654321"
              className="input validator"
              pattern="^\d{4}-\d{9}$"
              value={ mvFileNumber }
              onChange={ e => setMvFileNumber(e.target.value)}
            />
          </div>

          {/* CHASSIS */}
          <div className="col-span-2 flex justify-center">
            <label className="label mr-4" htmlFor="chassis_no">
              Chassis Number
            </label>
            <input 
              type="text" 
              name="chassis_no" 
              id="chassis_no" 
              placeholder="WDC2050011G000123"
              className="input validator"
              pattern="^[A-HJ-NPR-Z0-9]{17}$"
              value={ chassis }
              onChange={ e => setChassis(e.target.value)}
            />
          </div>

          {/* ENGINE */}
          <div className="col-span-2 flex justify-center">
            <label className="label mr-4" htmlFor="engine_no">
              Engine Number
            </label>
            <input 
              type="text" 
              name="engine_no" 
              id="engine_no" 
              placeholder="4G15012345"
              className="input validator"
              pattern="^[A-Z0-9]{5,25}$"
              value={ engine }
              onChange={ e => setEngine(e.target.value)}
            />
          </div>

          {/* VIN */}
          <input 
            type="text" 
            name="vin_no" 
            id="vin_no" 
            style={{display: 'none'}}
            value={ vin }
            onChange={ e => setVin(e.target.value)}
          />

          <div className="col-start-5 col-span-1 mr-8">
            <button type="submit" className="btn btn-neutral">Search</button>
          </div>

          {isPending ? <VehicleApiResult alertType="info" message="Searching..." /> : null}
          {success ? <VehicleApiResult alertType="success" message="Vehicle Retrieved Successfully."/> : null}
          {error ? <VehicleApiResult alertType="error" message={`${error.message}`}/> : null}
        </fieldset>
      </form>
    </>
  )
}
