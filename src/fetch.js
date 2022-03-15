import axios from "axios";
const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=7d313426-f697-4075-a211-0dbc09dc9bd2";
// 7d313426-f697-4075-a211-0dbc09dc9bd2
// e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d
export const fetchLocalData = (setLocalData, setError, setLoading) => {
  axios
    .get(
      `https://api.airvisual.com/v2/nearest_city?key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d`
    )
    .then((response) => {
      console.log(response);
      const data = response.data;
      setLocalData(data);
    })
    .catch((error) => {
      setError(error);
    });
  setLoading(false);
};

export const fetchCountries = (params, setCountries, setError, setLoading) => {
  axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      const countries = response.data.data.map((i) => i.country);
      setCountries(countries);
      setError(false);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
    });
};

export const fetchStates = (params, setStates, setError, setLoading) => {
  axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      const states = response.data.data.map((i) => i.state);
      setStates(states);
      setError(false);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
    });
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
