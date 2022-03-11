import styled from "styled-components";
import { devices } from "../../device";

export const LocationCard = styled.div`
  width: 362px;
  max-width: 100%;
  z-index: 500;
  position: relative;
  background: #cdebf9;
  border-radius: 6px;
  box-shadow: 2px 2px 5px 0 gray;
  padding: 0.75rem;
  margin: 0 0 1rem 0;

  @media ${devices.tablet} {
    width: 100%;
    max-width: 600px;
    margin: 0 auto 1rem auto;
  }
`;

export const AqiWrapper = styled.div`
  width: 100%;
  border: 1px solid magenta;
  margin-top: 16px;
`;

export const AqiData = styled.div`
  padding: 0.5rem;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  text-align: center;
  max-height: 101px;
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => {
    if (props.aqi < 51) {
      return "#A6CE39";
    } else if (props.aqi < 101) {
      return "#FFF000";
    } else if (props.aqi < 151) {
      return "#F68F1F";
    } else if (props.aqi < 201) {
      return "#EE2324";
    } else if (props.aqi < 301) {
      return "#8D4098";
    } else {
      return "#88181C";
    }
  }};
  color: black;
`;

export const WeatherContainer = styled.div`
  border-radius: 0 0 6px 6px;
  border: 1px solid #e6e6e6;
  border-top: none;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
