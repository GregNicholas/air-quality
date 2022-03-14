import styled from "styled-components";
import { devices } from "../../device";

export const NavBar = styled.header`
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  position: relative;
  top: 0;
  height: fit-content;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.tablet} {
    flex-direction: row;
  }
  @media ${devices.laptop} {
    text-align: center;
    padding-right: 20%;
    padding-left: 20%;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1.4rem 0 0 0;
  @media ${devices.tablet} {
    margin: 0;
  }
`;
