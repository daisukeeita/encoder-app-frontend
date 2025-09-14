// const plate_no: String | null = document.getElementById("plate_no").value;
const plate_no: HTMLInputElement | null = document.getElementById("plate_no") as HTMLInputElement;
const mv_file_no: HTMLInputElement | null = document.getElementById("mv_file_no") as HTMLInputElement;
const submit_btn: HTMLElement | null = document.getElementById("submit-btn");

const inspection_id: HTMLElement | null = document.getElementById("inspection-id");
const license_plate: HTMLElement | null = document.getElementById("license-plate");
const mv_file_number: HTMLElement | null = document.getElementById("mv-file-number");
const chassis: HTMLElement | null = document.getElementById("chassis");
const engine: HTMLElement | null = document.getElementById("engine");
const vehicle_color: HTMLElement | null = document.getElementById("vehicle-color");
const category_type: HTMLElement | null = document.getElementById("category-type");
const vehicle_model: HTMLElement | null = document.getElementById("vehicle-model");
const year_model: HTMLElement | null = document.getElementById("year-model");
const fuel_type: HTMLElement | null = document.getElementById("fuel-type");

const error_message: HTMLElement | null = document.getElementById("error-msg");

if (submit_btn) {
  submit_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await (window as any).api.search("http://localhost:8080/api/v1/encoder/requestVehicle", {
      chassis_no: "",
      engine_no: "",
      vin_no: "",
      plate_no: `${plate_no.value}`,
      mv_file_no: `${mv_file_no.value}`
    })


    if (inspection_id) inspection_id.textContent = `${response.inspectionId}`;
    if (license_plate) license_plate.textContent = `${response.licensePlate}`
    if (mv_file_number) mv_file_number.textContent = `${response.mvFileNumber}`
    if (chassis) chassis.textContent = `${response.chassis}`;
    if (engine) engine.textContent = `${response.engine}`;
    if (vehicle_color) vehicle_color.textContent = `${response.color}`;
    if (category_type) category_type.textContent = `${response.categoryType}`;
    if (vehicle_model) vehicle_model.textContent = `${response.model}`;
    if (year_model) year_model.textContent = `${response.modelYear}`;
    if (fuel_type) fuel_type.textContent = `${response.fuelType}` 
    console.log(response)
  })
}

// if (submit_btn) {
//   submit_btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (vehicle_color) vehicle_color.innerHTML = `${plate_no.value}`;
//   })
// }
