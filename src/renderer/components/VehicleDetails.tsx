import React, { useContext } from 'react';
import { VehicleDetailsContext } from '../contexts/VehicleDetailsContext';

export default function VehicleDetails ()  {
  const {
    inspectionID,
    licensePlate,
    mvFileNo,
    chassisNo,
    engineNo,
    color,
    categoryType,
    fuelType,
    modelYear
  } = useContext(VehicleDetailsContext);

  return (
    <>
      <ul className='list bg-base-100 rounded-box shadow-md mt-5'>
        <li className='p-4 pb-2 text-xs opacity-60 tracking-wide'>VEHICLE DETAILS</li>

        <li className='list-row'>
          <div className='w-30'>Inspection ID: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{inspectionID}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>License Plate: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{licensePlate}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>MV File Number: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{mvFileNo}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Chassis: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{chassisNo}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Engine: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{engineNo}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Color: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{color}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Category Type: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{categoryType}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Fuel Type: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{fuelType}</div>
        </li>

        <li className='list-row'>
          <div className='w-30'>Model Year: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>{modelYear}</div>
        </li>
      </ul>
    </>
  ) 
}
