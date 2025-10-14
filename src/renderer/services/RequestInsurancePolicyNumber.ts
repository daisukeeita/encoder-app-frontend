const basePath = "http://localhost:8080/api/v1/insurance/requestInsurancePolicyNumber";

const requestInsurancePolicyNumber = async (requestBody : object) => {
  const response = await fetch(basePath, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    if (response.status === 500) throw new Error("There's an unexpected error in internal server.");
    if (response.status === 503) throw new Error("The insurer is currently down or unavailable.");

    throw new Error (`Unexpected Error: ${response.status}`);
  }

  return response.json();
};

export default requestInsurancePolicyNumber;