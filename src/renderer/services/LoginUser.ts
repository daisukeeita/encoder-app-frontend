const basePath = "http://localhost:8080/api/v1/user/loginUser";

export const requestLoginUser = async (requestBody : object)=> {
  const response = await fetch(basePath, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  })

  return response.json();
}