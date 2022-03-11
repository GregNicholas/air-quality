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
  display: grid;
  grid-template-columns: 50px 1fr;
  background: ${(props) => {
    return props.color;
  }};
  color: black;
`;

export const AqiLegend = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  border: 1px solid orange;
`;

export const AqiInfo = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  border: 1px solid blue;
`;

export const WeatherContainer = styled.div`
  border-radius: 0 0 6px 6px;
  border: 1px solid #e6e6e6;
  border-top: none;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
