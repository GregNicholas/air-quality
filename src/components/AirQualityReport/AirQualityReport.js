import {
  LocationCard,
  AqiWrapper,
  AqiData,
  AqiInfo,
  AqiLegend,
  WeatherContainer
} from "./AirQualityReport-Styles";
import { aqiInfo } from "../../aqiInfo";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

export default function AirQualityReport({ data }) {
  let now = new Date();
  const offset = now.getTimezoneOffset();
  const aqi = data.current.pollution.aqius;
  const weather = data.current.weather;
  now = new Date(now.getTime() + offset * 60 * 1000);
  now = now.toISOString().split("T")[0];

  console.log(aqiInfo.good);
  let displayInfo = {};

  if (aqi < 51) {
    displayInfo = { ...aqiInfo.good };
  } else if (aqi < 101) {
    displayInfo = { ...aqiInfo.moderate };
  } else if (aqi < 151) {
    displayInfo = { ...aqiInfo.unhehalthysensitive };
  } else if (aqi < 201) {
    displayInfo = { ...aqiInfo.unhealthy };
  } else if (aqi < 301) {
    displayInfo = { ...aqiInfo.veryunhealthy };
  } else {
    displayInfo = { ...aqiInfo.hazardous };
  }

  const faceStyle = {
    background: aqiInfo.color,
    padding: "1rem 0.5rem",
    textAlign: "center"
  };

  return (
    <LocationCard>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <div style={{ fontWeight: "800", fontSize: "1.5rem" }}>{data.city}</div>
        <p style={{ fontStyle: "italic" }}>{now}</p>
      </div>
      <div>
        <AqiWrapper>
          <AqiData color={displayInfo.color}>
            <div style={faceStyle}>{displayInfo.face}</div>
            <div>
              <AqiInfo>
                <span>US AQI: {aqi}</span>
                <span>{displayInfo.warning}</span>
              </AqiInfo>
              <AqiLegend>{displayInfo.message}</AqiLegend>
            </div>
          </AqiData>
        </AqiWrapper>
        <WeatherContainer>
          <div className="temperature">
            <FaTemperatureHigh /> {weather.tp}&deg;C
          </div>
          <div className="humidity">
            <WiHumidity /> {weather.hu}%
          </div>
          <div className="wind">
            <FaWind /> {weather.ws} m/s
          </div>
        </WeatherContainer>
      </div>
    </LocationCard>
  );
}
