import {
  LocationCard,
  AqiWrapper,
  AqiData,
  WeatherContainer
} from "./AirQualityReport-Styles";

export default function AirQualityReport({ data }) {
  let now = new Date();
  const offset = now.getTimezoneOffset();
  now = new Date(now.getTime() + offset * 60 * 1000);
  now = now.toISOString().split("T")[0];
  return (
    <LocationCard>
      <div>{data.city}</div>
      <p>{now}</p>
      <div>
        <AqiWrapper>
          <AqiData>
            <div>face</div>
            <div>
              <div aqi-info>
                <span>22</span>
                <span>Good</span>
              </div>
              <div aqi-legend>
                <span>US AQI</span>
                <span>Open your windows</span>
              </div>
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
