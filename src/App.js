// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button/Button.js";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import AirQualityReport from "./components/AirQualityReport/AirQualityReport";
import {fetchLocalData} from "./fetch"
import { useSnackbar } from "react-simple-snackbar";

export default function App() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [localData, setLocalData] = useState({});
  const [chooseLocation, setChooseLocation] = useState(false);
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLocalData(setLocalData, setError, setLoading)
  },[])
  
  console.log("location data: ", localData);

  return (
    <div className="App">
      <h1 onClick={() => openSnackbar("This is the content of the Snackbar.")}>
        Air Quality
      </h1>
      <Button
        btnText={chooseLocation}
        clickHandler={() => setChooseLocation((prev) => !prev)}
      />
      {chooseLocation &&
        <ChooseLocation
          locationData={locationData}
          setLocationData={setLocationData}
          error={error}
          setError={setError}
          setLoding={setLoading}
        />
      }
      {localData && <AirQualityReport data={localData} />}
    </div>
  );
}
