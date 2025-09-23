import React from 'react';

export default function VehicleDetails() {
  return (
    <>
      <ul className='w-5/6 mx-auto list bg-base-100 rounded-box shadow-md'>
        <li className='p-4 pb-2 text-xs opacity-60 tracking-wide'>VEHICLE DETAILS</li>

        <li className='list-row'>
          <div>Inspection ID: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>inspection id value</div>
        </li>

        <li className='list-row'>
          <div>License Plate: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>license plate value</div>
        </li>

        <li className='list-row'>
          <div>MV File Number: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>mv file number value</div>
        </li>

        <li className='list-row'>
          <div>Chassis: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>chassis value</div>
        </li>

        <li className='list-row'>
          <div>Engine: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>engine value</div>
        </li>

        <li className='list-row'>
          <div>Color: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>color value</div>
        </li>

        <li className='list-row'>
          <div>Category Type: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>category type value</div>
        </li>

        <li className='list-row'>
          <div>Fuel Type: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>fuel type value</div>
        </li>

        <li className='list-row'>
          <div>Model Year: </div>
          <div className='text-xs uppercase font-semibold opcity-60'>model year value</div>
        </li>
      </ul>
    </>
  ) 
}
