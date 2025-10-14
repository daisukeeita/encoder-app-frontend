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
    manufacturer,
    brand,
    fuelType,
    modelYear,
    maximumTotalWeight
  } = useContext(VehicleDetailsContext);

  return (
    <div className='tab-content bg-base-100 border-base-300 p-6'>
      <div className='grid grid-cols-2 gap-5'>
        <ul className='list bg-base-100 rounded-box shadow-md'>
          {/* INSPECTION ID */}
          <li className='list-row'>
            <div className='w-30'>Inspection ID: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{inspectionID}</div>
          </li>

          {/* LICENSE PLATE */}
          <li className='list-row'>
            <div className='w-30'>License Plate: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{licensePlate}</div>
          </li>

          {/* MV FILE NUMBER */}
          <li className='list-row'>
            <div className='w-30'>MV File Number: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{mvFileNo}</div>
          </li>

          {/* CHASSIS NUMBER */}
          <li className='list-row'>
            <div className='w-30'>Chassis: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{chassisNo}</div>
          </li>

          {/* ENGINE NUMBER */}
          <li className='list-row'>
            <div className='w-30'>Engine: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{engineNo}</div>
          </li>

          {/* VEHICLE COLOR */}
          <li className='list-row'>
            <div className='w-30'>Color: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{color}</div>
          </li>
        </ul>

        
        <ul className='list bg-base-100 rounded-box shadow-md'>
          {/* CATEGORY TYPE */}
          <li className='list-row'>
            <div className='w-30'>Category Type: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{categoryType}</div>
          </li>

          {/* MANUFACTURER */}
          <li className='list-row'>
            <div className='w-30'>Manufacturer: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{manufacturer}</div>
          </li>

          {/* BRAND */}
          <li className='list-row'>
            <div className='w-30'>Brand: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{brand}</div>
          </li>

          {/* FUEL TYPE */}
          <li className='list-row'>
            <div className='w-30'>Fuel Type: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{fuelType}</div>
          </li>

          {/* MODEL YEAR */}
          <li className='list-row'>
            <div className='w-30'>Model Year: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{modelYear}</div>
          </li>

          {/* MAXUMUM TOTAL WEIGHT */}
          <li className='list-row'>
            <div className='w-30'>Maximum Total Weight: </div>
            <div className='text-xs uppercase font-semibold opcity-60'>{maximumTotalWeight}</div>
          </li>
        </ul>
      </div>
    </div>
  ) 
}
