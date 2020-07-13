import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    //get all the arguments and put them inside a single array or 0 if the apiCall has no parameters and
    setLoading(true);
    const response = await apiFunc(...args); //when we call it we will get a promise that is already resolved, so we won't have to use try-catch(apisauce)
    setLoading(false);

    setError(!response.ok); //if response.ok is true, setError will be false and if response.ok is false, setError will be true
    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
};
