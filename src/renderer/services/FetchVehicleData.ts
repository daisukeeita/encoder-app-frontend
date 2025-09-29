const basePath = "http://localhost:8080/api/v1/encoder/requestVehicle";

export default async function fetchVehicleData (requestBody: object) {
    const response = await fetch(basePath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      if (response.status === 404) throw new Error("Vehicle was not found.");
      if (response.status === 500) throw new Error("There's an unexpected error in internal server.");
      if (response.status === 503) throw new Error("The LTMS is currently unavailable or down.");

      throw new Error (`Unexpected error: ${response.status}`);
    } 

    return response.json();
}