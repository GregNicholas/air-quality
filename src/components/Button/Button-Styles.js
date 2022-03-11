import styled from "styled-components";

export const Main = styled("button")`
  display: inline-block;
  font-family: sans-serif;
  cursor: pointer;
  transition: background 0.3s;
  background: #ff9494;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: fit-content;
  border-radius: 5px;
  border: none;
  box-shadow: 4px 4px 12px grey;
  &:hover {
    background: brown;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 3px 3px 24px gray;
  }
`;
