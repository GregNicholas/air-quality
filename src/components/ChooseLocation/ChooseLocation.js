//import "./styles.css";
import { useState, useEffect } from "react";
import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import {
  fetchCountries,
  fetchStates,
  fetchCities,
  fetchLocationData
} from "../../fetch";

export default function ChooseLocation({ setLocationData, error, setError }) {
  const [countries, setCountries] = useState();
  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setLoading(true);
    const params = "countries?";
    fetchCountries(params, setCountries, setError, setLoading);
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
    if (selectedState && selectedCountry) {
      setLoading(true);
      const params = `cities?state=${selectedState}&country=${selectedCountry}&`;
      fetchCities(params, setCities, setError, setLoading);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      setLoading(true);
      const params = `city?city=${selectedCity}&state=${selectedState}&country=${selectedCountry}&`;
      console.log(
        `https://api.airvisual.com/v2/${params}key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d`
      );
      fetchLocationData(params, setLocationData, setError, setLoading);
    }
  }, [selectedCity]);

  if (error) {
    console.log(error);
  }
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
            setSelectedCity("");
            setSelectedState("");
            setSelectedCountry("");
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
