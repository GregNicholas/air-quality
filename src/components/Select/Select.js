import react, { useState } from "react";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem
} from "./Select-Styles";

export default function Select({ options, selectedOption, selectOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !isOpen);

  return (
    <Main>
      <h1>Choose Country</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggleDropDown}>
          {selectedOption || "-select-"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => {
                return (
                  <ListItem
                    key={Math.random()}
                    onClick={() => {
                      selectOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {option.country}
                  </ListItem>
                );
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
