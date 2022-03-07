import axios from "axios";
const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export const fetchLocalData = (setLocalData, setError, setLoading) => {
  axios
    .get(`https://api.airvisual.com/v2/nearest_city?key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d`)
    .then((response) => {
      const data = response.data;
      setLocalData(data);
      console.log(data)
    })
    .catch((error) => {
      setError(error);
    });
  setLoading(false);
}

export const fetchStates = (params, setStates, setError, setLoading) => {
  axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      const states = response.data.data.map((i) => i.state);
      setStates(states);
    })
    .catch((error) => {
      setError(error);
    });
  setLoading(false);
};

export const fetchCities = (params, setCities, setError, setLoading) => {
  axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      const cities = response.data.data.map((i) => i.city);
      setCities(cities);
    })
    .catch((error) => {
      setError(error);
    });
  setLoading(false);
};

export const fetchLocationData = (
  params,
  setLocationData,
  setError,
  setLoading
) => {
  console.log(`${apiBaseURL}${params}${API_KEY}`);
  axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      const locData = response.data;
      setLocationData(locData);
    })
    .catch((error) => {
      setError(error);
    });
  setLoading(false);
};
