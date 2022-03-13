import styled from "styled-components";
import { devices } from "../../device";

export const LocationCard = styled.div`
  width: 362px;
  max-width: 100%;
  z-index: 500;
  position: relative;
  background: #cdebf9;
  border-radius: 6px;
  box-shadow: 4px 4px 15px black;
  margin: 0 0 1rem 0;

  @media ${devices.tablet} {
    width: 100%;
    max-width: 600px;
    margin: 0 auto 1rem auto;
  }
`;

export const LocationCardHeading = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Favorite = styled.div`
  height: fit-content;
  transition: 500ms;
  &:hover {
    color: red;
  }
`;

export const AqiWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const AqiData = styled.div`
  overflow: hidden;
  text-align: center;
  display: grid;
  grid-template-columns: 50px 1fr;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  background: ${(props) => {
    return props.color;
  }};
  color: black;
`;

export const AqiLegend = styled.div`
  padding: 0.5rem;
  display: grid;
  text-align: left;
  grid-template-columns: 1fr;
`;

export const AqiInfo = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 100px 1fr;
  border-bottom: 1px solid gray;
`;

export const WeatherContainer = styled.div`
  border-radius: 0 0 6px 6px;
  border: 1px solid #e6e6e6;
  border-top: none;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
