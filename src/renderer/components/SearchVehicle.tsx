import React from "react";


export default function SearchVehicle (){
  return (
      <form className="w-5/6 mx-auto mb-5 text-stone-700 font-sans">
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
            />
          </div>

          <input 
            type="text" 
            name="vin_no" 
            id="vin_no" 
            style={{
              display: 'none'
            }}
          />
        </fieldset>
      </form>
  )
}
