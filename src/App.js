import "./styles.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import ChooseFavorites from "./components/ChooseFavorites/ChooseFavorites";
import AirQualityReport from "./components/AirQualityReport/AirQualityReport";
import Map from "./components/Map/Map";
import { fetchLocalData } from "./fetch";

// import cloudsBg from "./images/clouds.png";
// import nightBg from "./images/nightSky.jpeg";
// import dayBg from "./images/daysky2.jpg";
const dayBg =
  "https://rawcdn.githack.com/GregNicholas/air-quality/a7b21c237daaa81e5ef281ceb1a9998d08fca558/src/images/daysky2.jpg";
const nightBg =
  "https://rawcdn.githack.com/GregNicholas/air-quality/7459aa15cc62ab21726da41cd77e81a597b94b70/src/images/nightSky.jpeg";

export default function App() {
  const [localData, setLocalData] = useState("");
  const [chooseLocation, setChooseLocation] = useState("auto");
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
      <Navbar
        chooseLocation={chooseLocation}
        setChooseLocation={setChooseLocation}
        setLocationData={setLocationData}
      />
      <div className="container">
        {chooseLocation !== "auto" && (
          <section className="search-container">
            {chooseLocation === "lookup" && (
              <ChooseLocation
                locationData={locationData}
                setLocationData={setLocationData}
                error={error}
                setError={setError}
                setLoding={setLoading}
              />
            )}
            {chooseLocation === "favorites" &&
              (favorites.length > 0 ? (
                <ChooseFavorites
                  favorites={favorites}
                  locationData={locationData}
                  setLocationData={setLocationData}
                  error={error}
                  setError={setError}
                  setLoding={setLoading}
                />
              ) : (
                <h2>No favorites selected!</h2>
              ))}
          </section>
        )}
        <section className="results-container">
          {localData && latitude && longitude && (
            <>
              {loading && <h2>Loading...</h2>}
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
