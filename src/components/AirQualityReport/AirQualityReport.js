import {
  LocationCard,
  AqiWrapper,
  AqiData,
  AqiInfo,
  AqiLegend,
  WeatherContainer
} from "./AirQualityReport-Styles";

export default function AirQualityReport({ data }) {
  let now = new Date();
  const offset = now.getTimezoneOffset();
  const aqi = data.current.pollution.aqius;
  now = new Date(now.getTime() + offset * 60 * 1000);
  now = now.toISOString().split("T")[0];

  let color;
  let warning;
  let message;
  if (aqi < 51) {
    color = "#A6CE39";
    warning = "Good";
    message = "It’s a great day to be active outside.";
  } else if (aqi < 101) {
    color = "#FFF000";
    warning = "Moderate";
    message = `Unusually sensitive people: Consider reducing
    prolonged or heavy exertion. Watch for symptoms
    such as coughing or shortness of breath. These are
    signs to take it easier.`;
  } else if (aqi < 151) {
    color = "#F68F1F";
    warning = "Unhealthy for Sensitive Groups";
  } else if (aqi < 201) {
    color = "#EE2324";
    warning = "Unhealthy";
  } else if (aqi < 301) {
    color = "#8D4098";
    warning = "Very Unhealthy";
  } else {
    color = "#88181C";
    warning = "Hazardous";
  }

  const faceStyle = { background: color };

  return (
    <LocationCard>
      <div>{data.city}</div>
      <p>{now}</p>
      <div>
        <AqiWrapper>
          <AqiData color={color}>
            <div style={faceStyle}>face</div>
            <div style={{ border: "1px solid", width: "100%" }}>
              <AqiInfo>
                <span>{aqi}</span>
                <span>{warning}</span>
              </AqiInfo>
              <AqiLegend>
                <span>US AQI</span>
                <span>{message}</span>
              </AqiLegend>
            </div>
          </AqiData>
        </AqiWrapper>
        <WeatherContainer>
          <div className="temperature">55.4</div>
          <div className="humidity">62%</div>
          <div className="wind">1mp/h</div>
        </WeatherContainer>
      </div>
    </LocationCard>
  );
}
