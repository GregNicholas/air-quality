import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  background: #e1e1e1;
  padding: 0 1rem;
  height: 100%;
  width: 350px;
  text-align: end;
  border-radius: 5px;
  margin: 0.5rem 0;
`;
export const DropDownContainer = styled("div")`
  width: 12rem;
  margin: 0 auto;
  padding: 1rem;
  display: inline-block;
`;
export const DropDownHeader = styled("div")`
  text-align: center;
  padding: 0.4em 0.4em 0.4em 0.4em;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  &:hover {
    background: #eeeeee;
  }
`;
export const DropDownListContainer = styled("div")`
  position: absolute;
  width: 10rem;
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
  color: #3faffa;
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
