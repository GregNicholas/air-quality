import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import ChangeView from "../ChangeView/ChangeView";
// import green from "../../images/good.png";
// import yellow from "/src/images/moderate.png";
// import orange from "/src/images/sensitive.png";
// import red from "/src/images/unhealthy.png";
// import purple from "/src/images/veryunhealthy.png";
// import brown from "/src/images/hazardous.png";

const green =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/KNYO-good.png";
const yellow =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/VWN--moderate.png";
const orange =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/medZ-sensitive.png";
const red =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/jaGB-unhealthy.png";
const purple =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/LQUs-veryunhealthy.png";
const brown =
  "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/L84U-hazardous.png";

export default function Map({ mapData, center, zoom }) {
  const aqi = mapData.current.pollution.aqius;
  let iconColor =
    "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/KNYO-good.png";
  if (aqi < 51) {
    iconColor =
      "https://uploads.codesandbox.io/uploads/user/144e9e2e-7384-4c6c-ae0f-e14a962e8dca/KNYO-good.png";
  } else if (aqi < 101) {
    iconColor = yellow;
  } else if (aqi < 151) {
    iconColor = orange;
  } else if (aqi < 201) {
    iconColor = red;
  } else if (aqi < 301) {
    iconColor = purple;
  } else {
    iconColor = brown;
  }

  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const mapIcon = new LeafIcon({
    iconUrl: iconColor,
    iconSize: [20, 15]
  });

  console.log(green);
  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        className="map-container"
        style={{
          height: "300px",
          maxWidth: "100%",
          boxShadow: "2px 2px 5px 0 gray",
          borderRadius: "6px",
          zIndex: "0",
          margin: "0 auto",
          position: "relative"
        }}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={mapIcon}>
          <Popup>
            <div>
              {mapData.city}
              <br />
              {mapData.state}, {mapData.country}
              <br /> AQI: {mapData.current.pollution.aqius}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <img src={green} alt="red" />
    </>
  );
}
