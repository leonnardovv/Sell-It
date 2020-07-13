import { create } from "apisauce";
// Using apisauce we won't have to handle the unresolved promises because the promises will
// always be respolved. We only need to handle the error(that's the beauty of apisauce)
import cache from "../utility/cache";
// We use cache here because we will get the data from the server, we will save it in cache
// then if we want to do something else on the server and if it fails we will have the data
// in the cache. We do it here because the apiClient gets the data from the server
import authStorage from "../auth/storage";

const apiClient = create({
  // baseURL: "http://192.168.100.6:9000/api",
  baseURL: "http://127.0.0.1:9000/api",
});

// We use this for protected API endpoints
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  //In order to do the request, the server expects a header element which is written on backend as x-auth-token
  request.headers["x-auth-token"] = authToken; // Through this we make protected calls(we include the user token)
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response; // returning the entire response object, not only the data
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response; // Return the data or return the response obj because
  // the response obj has the data of why it failed
};

// Our component should not know anything about api calls because this
// violates the separation of concerns principle
// Our component should have a single responsibility which is the UI

// apiClient.get("/listings").then((response) => {
//   if (!response.ok) {
//     console.log("Problem: " + response.problem);
//   }
// });

export default apiClient;
