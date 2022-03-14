import styled from "styled-components";

export const Main = styled("button")`
  display: inline-block;
  font-family: sans-serif;
  color: midnightblue;
  cursor: pointer;
  transition: background 0.3s;
  background: ${(props) => (props.selected ? "#4debf9" : "#cdebf9")};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: fit-content;
  border-radius: 5px;
  border: none;
  box-shadow: 4px 4px 15px black;
  &:hover {
    background: #4debf9;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 3px 3px 24px gray;
  }
`;
