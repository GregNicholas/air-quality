import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ChangeView from "../ChangeView/ChangeView";

export default function Map({ mapData, center, zoom }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{
        height: "180px",
        width: "362px",
        maxWidth: "100%",
        border: "1px solid blue",
        zIndex: "0"
      }}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          {mapData.city}
          <br />
          {mapData.state}, {mapData.country}
          <br /> AQI: {mapData.current.pollution.aqius}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
