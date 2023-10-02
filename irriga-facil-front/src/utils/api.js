export function ApiRequest(endpoint = "", method = "GET", data = {}) {
  return fetch(`${process.env["API_URL"]}/${endpoint}`, {
    method,
    body: JSON.stringify(data),
  })
}
