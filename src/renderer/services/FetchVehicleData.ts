export const basePath = "http://localhost:8080/api/v1/encoder/requestVehicle";

export default async function fetchVehicleData (requestBody: object) {
  const response = await fetch(basePath, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  })

  console.log(JSON.stringify(requestBody));

  return await response.json();
}