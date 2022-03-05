import styled from "styled-components";

export const Main = styled("button")`
  font-family: sans-serif;
  transition: background 0.9s;
  background: #ff9494;
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 5px;
  border: none;
  box-shadow: 8px 8px 24px gray;
  &:hover {
    background: brown;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 3px 3px 24px gray;
  }
`;
