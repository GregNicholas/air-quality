import React from "react";
import { NavBar } from "./NavBar-Styles";
import { useSnackbar } from "react-simple-snackbar";

export default function Navbar() {
  const options = {
    position: "top-right",
    style: {
      backgroundColor: "midnightblue",
      width: "50px",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "1.25rem",
      textAlign: "center",
      paddingTop: "5px"
    },
    closeStyle: {
      paddingBottom: "14px",
      color: "lightcoral",
      fontSize: "1rem"
    }
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  return (
    <NavBar>
      <h1 className="logo" onClick={() => openSnackbar("Breathe fresh air")}>
        AirQ
      </h1>
    </NavBar>
  );
}
