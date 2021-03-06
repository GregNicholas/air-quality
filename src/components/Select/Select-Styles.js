import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  background: #cdebf9;
  color: midnightblue;
  padding: 0 0 0 0.5rem;
  height: 100%;
  min-width: 320px;
  max-width: 350px;
  text-align: end;
  border-radius: 5px;
  margin: 0 0 0.5rem 0;
  box-shadow: 4px 4px 15px black;
`;
export const DropDownContainer = styled("div")`
  width: 15rem;
  margin: 0 auto;
  padding: 0.5rem;
  display: inline-block;
`;
export const DropDownHeader = styled("div")`
  text-align: center;
  padding: 0.4em 0.4em 0.4em 0.4em;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: midnightblue;
  background: #ffffff;
  &:hover {
    background: #eeeeee;
  }
`;
export const DropDownListContainer = styled("div")`
  position: absolute;
  width: 14rem;
  z-index: 1000;
`;
export const DropDownList = styled("ul")`
  max-height: 15rem;
  overflow: scroll;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  color: midnightblue;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const ListItem = styled("li")`
  list-style: none;
  padding: 0.5rem;
  text-align: center;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
  &:active {
    background-color: blue;
  }
`;
