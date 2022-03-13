import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  transition: all 0.9s;
  background: #ff9494;
  padding: 1rem;
  width: fit-content;
  max-width: 380px;
  top: ${(props) => (props.show ? "100px" : "0")};
  border-radius: 5px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  border: 1px solid #ff8585;
  position: absolute;
  left: 50%;
  z-index: 2000;
  transform: translateX(-50%);
  box-shadow: 8px 8px 24px gray;
  display: ${(props) => (props.disp ? "block" : "none")};
`;
