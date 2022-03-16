import React from "react";
import { NavBar } from "./NavBar-Styles";
import { BtnContainer } from "./NavBar-Styles";
import Button from "../Button/Button";
import { useSnackbar } from "react-simple-snackbar";

export default function Navbar({
  chooseLocation,
  setChooseLocation,
  setLocationData
}) {
  const options = {
    position: "top-right",
    style: {
      backgroundColor: "midnightblue",
      width: "50px",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "1.25rem",
      textAlign: "center",
      paddingTop: "2px"
    },
    closeStyle: {
      paddingBottom: "14px",
      color: "#FFF",
      fontSize: "1rem",
      paddingTop: "7px"
    }
  };
  const [openSnackbar] = useSnackbar(options);

  return (
    <NavBar>
      <h1 className="logo" onClick={() => openSnackbar("Breathe fresh air")}>
        AirQ
      </h1>
      <BtnContainer>
        <div style={{ marginTop: ".5rem" }}>
          <Button
            selected={chooseLocation === "lookup" ? true : false}
            btnText="choose location"
            clickHandler={() => {
              setChooseLocation("lookup");
            }}
          />
        </div>
        <div style={{ marginTop: ".5rem" }}>
          <Button
            selected={chooseLocation === "favorites" ? true : false}
            btnText={"Favorites"}
            clickHandler={() => {
              setChooseLocation("favorites");
            }}
          />
        </div>
        <div style={{ marginTop: ".5rem" }}>
          <Button
            selected={chooseLocation === "auto" ? true : false}
            btnText="current location"
            clickHandler={() => {
              setChooseLocation("auto");
              setLocationData("");
            }}
          />
        </div>
      </BtnContainer>
    </NavBar>
  );
}
