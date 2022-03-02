// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "./components/Select/Select";
import { fetchStates } from "./fetch";
// import useFetch from "react-fetch-hook";

const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export default function App() {
  const [countries, setCountries] = useState();
  const [states, setStates] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const fetchData = (params) => {
    axios
      .get(`${apiBaseURL}${params}${API_KEY}`)
      .then((response) => {
        const countries = response.data.data.map((i) => i.country);
        setCountries(countries);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const params = "countries?";
    fetchData(params);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      const params = `states?country=${selectedCountry}&`;
      fetchStates(params, setStates, setError, setLoading);
    }
  }, [selectedCountry]);
  console.log(states);
  return (
    <div className="App">
      <h1>Air Quality</h1>
      {loading && <h2>Loading...</h2>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {countries && (
        <Select
          category="Country"
          options={countries}
          selectedOption={selectedCountry}
          selectOption={(option) => {
            setSelectedCountry(option);
          }}
        />
      )}
      {selectedCountry && (
        <Select
          category="State"
          options={states}
          selectedOption={selectedState}
          selectOption={(option) => {
            setSelectedState(option);
          }}
        />
      )}
    </div>
  );
}
