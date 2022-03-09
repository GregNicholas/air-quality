// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button/Button.js";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import AirQualityReport from "./components/AirQualityReport/AirQualityReport";
import { fetchLocalData } from "./fetch";
import { useSnackbar } from "react-simple-snackbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function App() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [localData, setLocalData] = useState("");
  const [chooseLocation, setChooseLocation] = useState(false);
  const [locationData, setLocationData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let latitude = null,
    longitude = null;

  useEffect(() => {
    fetchLocalData(setLocalData, setError, setLoading);
  }, []);

  if (localData) {
    latitude = localData.data.location.coordinates[0];
    longitude = localData.data.location.coordinates[1];
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
        clickHandler={() => setChooseLocation((prev) => !prev)}
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
          <AirQualityReport data={localData} />
          <MapContainer
            center={[51.505, -0.09]}
            zoom={5}
            style={{
              height: "180px",
              width: "362px",
              maxWidth: "100%",
              border: "1px solid blue"
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </>
      )}

      {/* <div id="map"> */}

      {/* </div> */}
    </div>
  );
}
