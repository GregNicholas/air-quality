// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
// import Select from "./components/Select/Select";
// import Alert from "./components/Alert/Alert";
import { fetchStates, fetchCities } from "./fetch";
import { useSnackbar } from "react-simple-snackbar";

export default function App() {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  return (
    <div className="App">
      <h1 onClick={() => openSnackbar("This is the content of the Snackbar.")}>
        Air Quality
      </h1>
      <ChooseLocation />
    </div>
  );
}
