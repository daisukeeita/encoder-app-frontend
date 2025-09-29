import React from 'react';

export const VehicleApiResult = ({alertType, message} : {message: string, alertType: string}) => {
  return (
    <div className='toast toast-top toast-end'>
      <div className={`alert alert-${alertType}`}>{message}</div>
    </div>
  )
}