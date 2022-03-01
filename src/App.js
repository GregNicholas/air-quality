import "./styles.css";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";

const MY_KEY = "e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export default function App() {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const link =
    "https://api.airvisual.com/v2/countries?key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";
  // const { loading, data, error} = useFetch(
  //   "https://api.airvisual.com/v2/countries?key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d"
  // );

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.airvisual.com/v2/countries?key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d"
      );
      const data = await response.json();
      //console.log(data);
      setCountries(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Air Quality</h1>
      {loading && <h2>Loading...</h2>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {countries &&
          countries.map(({ country }) => (
            <li key={country}>
              <h3>{country}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
