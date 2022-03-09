import styled from "styled-components";

export const LocationCard = styled("div")`
  border: 1px solid magenta;
  width: 362px;
  max-width: 100%;
  z-index: 500;
  position: relative;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
  padding: 0.75rem;
`;

export const AqiWrapper = styled("div")`
  width: 100%;
  border: 1px solid magenta;
  margin-top: 16px;
`;

export const AqiData = styled("div")`
  padding: 0.5rem;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  text-align: center;
  max-height: 101px;
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => {
    if (props.aqi < 51) {
      return "#b0e867";
    } else if (props.aqi < 101) {
      return "yellow";
    } else if (props.aqi < 151) {
      return "orange";
    } else if (props.aqi < 201) {
      return "red";
    } else if (props.aqi < 301) {
      return "purple";
    } else {
      return "brown";
    }
  }};
  color: black;
`;

export const WeatherContainer = styled("div")`
  border-radius: 0 0 6px 6px;
  border: 1px solid #e6e6e6;
  border-top: none;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
