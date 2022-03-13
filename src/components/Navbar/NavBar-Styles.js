import styled from "styled-components";
import { devices } from "../../device";

export const NavBar = styled.header`
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  position: relative;
  top: 0;
  height: 4.1rem;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-around;

  @media ${devices.laptop} {
    text-align: center;
    padding-right: 20%;
    padding-left: 20%;
  }
`;
