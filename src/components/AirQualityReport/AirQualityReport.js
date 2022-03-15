import {
  LocationCard,
  LocationCardHeading,
  Favorite,
  AqiWrapper,
  AqiData,
  AqiInfo,
  AqiLegend,
  WeatherContainer
} from "./AirQualityReport-Styles";
import { aqiInfo } from "../../aqiInfo";
import {
  FaTemperatureHigh,
  FaWind,
  FaHeart,
  FaRegHeart,
  FaRegSadTear
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { CgSmileNeutral } from "react-icons/cg";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";
import { GrAlert } from "react-icons/gr";

export default function AirQualityReport({ data, favorites, updateFavorites }) {
  const isFavorite = favorites.some(
    (f) => f.city === data.city && f.state === data.state
  );
  let now = new Date();
  const offset = now.getTimezoneOffset();
  now = new Date(now.getTime() + offset * 60 * 1000);
  now = now.toISOString().split("T")[0];
  const aqi = data.current.pollution.aqius;
  const weather = data.current.weather;

  console.log(data);
  const handleFavorite = () => {
    updateFavorites({
      city: data.city,
      state: data.state,
      country: data.country,
      coords: data.location.coordinates
    });
  };

  console.log("favorites: ", favorites);

  let displayInfo = {};

  if (aqi < 51) {
    displayInfo = { ...aqiInfo.good };
  } else if (aqi < 101) {
    displayInfo = { ...aqiInfo.moderate };
  } else if (aqi < 151) {
    displayInfo = { ...aqiInfo.unhealthysensitive };
  } else if (aqi < 201) {
    displayInfo = { ...aqiInfo.unhealthy };
  } else if (aqi < 301) {
    displayInfo = { ...aqiInfo.veryunhealthy };
  } else {
    displayInfo = { ...aqiInfo.hazardous };
  }

  const faceStyle = {
    fontSize: "2rem",
    background: aqiInfo.color,
    padding: "1rem 0.5rem",
    textAlign: "center"
  };

  let customJSX;
  switch (displayInfo.face) {
    case "BiHappyHeartEyes":
      customJSX = <BiHappyHeartEyes />;
      break;
    case "HiOutlineEmojiHappy":
      customJSX = <HiOutlineEmojiHappy />;
      break;
    case "CgSmileNeutral":
      customJSX = <CgSmileNeutral />;
      break;
    case "HiOutlineEmojiSad":
      customJSX = <HiOutlineEmojiSad />;
      break;
    case "FaRegSadTear":
      customJSX = <FaRegSadTear />;
      break;
    case "GrAlert":
      customJSX = <GrAlert />;
      break;
    default:
      customJSX = <HiOutlineEmojiHappy />;
  }

  const celcTOfahr = (c) => {
    return (c * 9) / 5 + 32;
  };

  return (
    <LocationCard>
      <LocationCardHeading>
        <div>
          <div style={{ fontWeight: "800", fontSize: "1.5rem" }}>
            {data.city}
          </div>
          <p style={{ fontStyle: "italic" }}>{now}</p>
        </div>
        <Favorite onClick={handleFavorite}>
          {isFavorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
        </Favorite>
      </LocationCardHeading>

      <AqiWrapper>
        <AqiData color={displayInfo.color}>
          <div style={faceStyle}>{customJSX}</div>
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
          <FaTemperatureHigh /> {weather.tp}&deg;C / {celcTOfahr(weather.tp)}
          &deg;F
        </div>
        <div className="humidity">
          <WiHumidity /> {weather.hu}%
        </div>
        <div className="wind">
          <FaWind /> {weather.ws} m/s
        </div>
      </WeatherContainer>
    </LocationCard>
  );
}
