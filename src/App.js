// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button/Button.js";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import AirQualityReport from "./components/AirQualityReport/AirQualityReport";
import Map from "./components/Map/Map";
import { fetchLocalData } from "./fetch";
import { useSnackbar } from "react-simple-snackbar";

export default function App() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [localData, setLocalData] = useState("");
  const [chooseLocation, setChooseLocation] = useState(false);
  const [locationData, setLocationData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let latitude = null,
    longitude = null;
  const zoom = 7;
  let center;
  let reportData;

  useEffect(() => {
    fetchLocalData(setLocalData, setError, setLoading);
  }, []);
  console.log(localData);
  if (locationData) {
    reportData = locationData.data;
    longitude = reportData.location.coordinates[0];
    latitude = reportData.location.coordinates[1];
    center = [latitude, longitude];
  } else if (localData) {
    reportData = localData.data;
    longitude = reportData.location.coordinates[0];
    latitude = reportData.location.coordinates[1];
    center = [latitude, longitude];
    console.log(latitude, longitude);
  }

  return (
    <div className="App">
      <h1
        className="logo"
        onClick={() => openSnackbar("This is the content of the Snackbar.")}
      >
        AirQ
      </h1>
      <Button
        btnText={chooseLocation}
        clickHandler={() => {
          if (chooseLocation) {
            setLocationData("");
            setChooseLocation(false);
          } else {
            setChooseLocation(true);
          }
        }}
      />
      {chooseLocation && (
        <ChooseLocation
          locationData={locationData}
          setLocationData={setLocationData}
          error={error}
          setError={setError}
          setLoding={setLoading}
        />
      )}
      {localData && latitude && longitude && (
        <>
          <AirQualityReport data={reportData} />
          <Map mapData={reportData} center={center} zoom={zoom} />
        </>
      )}

      {/* <div id="map"> */}

      {/* </div> */}
    </div>
  );
}
