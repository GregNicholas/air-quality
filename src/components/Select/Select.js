import react, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

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
      <label>
        {category}
        <DropDownContainer>
          <DropDownHeader onClick={toggleDropDown}>
            {selectedOption || "-choose-"}
          </DropDownHeader>
          {isOpen && (
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
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
            </OutsideClickHandler>
          )}
        </DropDownContainer>
      </label>
    </Main>
  );
}
