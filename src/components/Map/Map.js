import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import ChangeView from "../ChangeView/ChangeView";
import green from "../../../public/images/good.png";

export default function Map({ mapData, center, zoom }) {
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const greenIcon = new LeafIcon({
    iconUrl: "./images/redcirc.png",
    iconSize: [20, 20]
  });

  const icon = greenIcon;
  console.log(green);
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{
        height: "180px",
        width: "362px",
        maxWidth: "100%",
        boxShadow: "2px 2px 5px 0 gray",
        borderRadius: "6px",
        zIndex: "0",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
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
  );
}
