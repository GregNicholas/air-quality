import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  background: #e1e1e1;
  height: 100%;
`;
export const DropDownContainer = styled("div")`
  width: 12rem;
  margin: 0 auto;
  padding: 1rem;
`;
export const DropDownHeader = styled("div")`
  text-align: center;
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;
export const DropDownListContainer = styled("div")``;
export const DropDownList = styled("ul")`
  height: 15rem;
  overflow: scroll;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  padding: 0.5rem;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
  &:active {
    background-color: blue;
  }
`;
