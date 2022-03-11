import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import ChangeView from "../ChangeView/ChangeView";
import green from "/src/images/good.png";
import yellow from "/src/images/moderate.png";
import orange from "/src/images/sensitive.png";
import red from "/src/images/unhealthy.png";
import purple from "/src/images/veryunhealthy.png";
import brown from "/src/images/hazardous.png";

export default function Map({ mapData, center, zoom }) {
  const aqi = mapData.current.pollution.aqius;
  let iconColor = green;
  if (aqi < 51) {
    iconColor = green;
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
    </>
  );
}
