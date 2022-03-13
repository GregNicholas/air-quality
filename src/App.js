import cloudsBg from "./images/clouds.png";
import nightBg from "./images/nightSky.jpeg";
import dayBg from "./images/daysky2.jpg";

import "./styles.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button.js";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import AirQualityReport from "./components/AirQualityReport/AirQualityReport";
import Map from "./components/Map/Map";
import { fetchLocalData } from "./fetch";

export default function App() {
  const [localData, setLocalData] = useState("");
  const [chooseLocation, setChooseLocation] = useState(false);
  const [locationData, setLocationData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  let latitude = null,
    longitude = null;
  const zoom = 7;
  let center;
  let reportData;

  useEffect(() => {
    fetchLocalData(setLocalData, setError, setLoading);
  }, []);

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
  }

  let background;
  const hour = new Date().getHours();
  if (hour >= 6 && hour <= 19) {
    background = dayBg;
  } else {
    background = nightBg;
  }

  const updateFavorites = (loc) => {
    console.log("loc", loc);
    if (!favorites.some((f) => f.city === loc.city && f.state === loc.state)) {
      setFavorites((prev) => {
        const newFavs = [...prev, loc];
        return newFavs;
      });
    } else {
      const removedFromFavs = favorites.filter(
        (f) => f.city !== loc.city && f.state !== loc.state
      );
      setFavorites(removedFromFavs);
    }
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="container">
        <section className="search-container">
          <Button
            btnText={chooseLocation ? "use your location" : "choose location"}
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
        </section>
        <section className="results-container">
          {localData && latitude && longitude && (
            <>
              <AirQualityReport
                data={reportData}
                favorites={favorites}
                updateFavorites={updateFavorites}
              />
              <Map mapData={reportData} center={center} zoom={zoom} />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
