import axios from "axios";
const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export const fetchData = (params) => {
  return axios
    .get(`${apiBaseURL}${params}${API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
