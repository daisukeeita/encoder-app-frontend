import React, { Dispatch, ReactNode, SetStateAction , createContext, useState } from "react";

type VehicleDetailType = {
  inspectionID : string;
  licensePlate : string;
  mvFileNo     : string;
  chassisNo    : string;
  engineNo     : string;
  color        : string;
  categoryType : string;
  fuelType     : string;
  modelYear    : string;
  setInspectionID : Dispatch<SetStateAction<string>>;
  setLicensePlate : Dispatch<SetStateAction<string>>;
  setMvFileNo     : Dispatch<SetStateAction<string>>;
  setChassisNo    : Dispatch<SetStateAction<string>>;
  setEngineNo     : Dispatch<SetStateAction<string>>;
  setColor        : Dispatch<SetStateAction<string>>;
  setCategoryType : Dispatch<SetStateAction<string>>;
  setFuelType     : Dispatch<SetStateAction<string>>;
  setModelYear    : Dispatch<SetStateAction<string>>;
}

type Props = { children : ReactNode };

export const VehicleDetailsContext = createContext<VehicleDetailType>({} as VehicleDetailType);

export const VehicleDetailsContextProvider = ({children} : Props) => {
  const [inspectionID, setInspectionID] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [mvFileNo, setMvFileNo] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [color, setColor] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [modelYear, setModelYear] = useState('');

  const context: VehicleDetailType = {
    setInspectionID, inspectionID,
    setLicensePlate, licensePlate,
    setMvFileNo,     mvFileNo,
    setChassisNo,    chassisNo,
    setEngineNo,     engineNo,
    setColor,        color,
    setCategoryType, categoryType,
    setFuelType,     fuelType,
    setModelYear,    modelYear
  };

  return (
    <VehicleDetailsContext value={context}>
      {children}
    </VehicleDetailsContext>
  )
}