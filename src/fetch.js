import axios from "axios";
const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

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
  console.log(`${apiBaseURL}${params}${API_KEY}`);
};
