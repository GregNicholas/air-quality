import react, { useState } from "react";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem
} from "./Select-Styles";

export default function Select({
  options,
  selectedOption,
  selectOption,
  category
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !isOpen);

  return (
    <Main>
      <h1>Choose {category}</h1>
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
                    {option}
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
