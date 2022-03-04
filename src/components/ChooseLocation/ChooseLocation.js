//import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import { fetchStates, fetchCities } from "../../fetch";

const apiBaseURL = "https://api.airvisual.com/v2/";
const API_KEY = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export default function ChooseLocation() {
  const [countries, setCountries] = useState();
  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const fetchData = (params) => {
    axios
      .get(`${apiBaseURL}${params}${API_KEY}`)
      .then((response) => {
        const countries = response.data.data.map((i) => i.country);
        setCountries(countries);
        setError(false);
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
    setSelectedState("");
    if (selectedCountry) {
      setLoading(true);
      const params = `states?country=${selectedCountry}&`;
      fetchStates(params, setStates, setError, setLoading);
    }
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCity("");
    if (selectedState) {
      setLoading(true);
      const params = `cities?state=${selectedState}&country=${selectedCountry}&`;
      fetchCities(params, setCities, setError, setLoading);
    }
  }, [selectedState]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <Alert message={error} />}
      {countries && (
        <Select
          category="Country"
          options={countries}
          selectedOption={selectedCountry}
          selectOption={(option) => {
            setError(false);
            setSelectedCountry(option);
          }}
        />
      )}
      {selectedCountry && !error && (
        <Select
          category="State"
          options={states}
          selectedOption={selectedState}
          selectOption={(option) => {
            setSelectedState(option);
          }}
        />
      )}
      {selectedState && !error && (
        <Select
          category="City"
          options={cities}
          selectedOption={selectedCity}
          selectOption={(option) => {
            setSelectedCity(option);
          }}
        />
      )}
    </div>
  );
}
