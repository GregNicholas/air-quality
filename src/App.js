// https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/

import "./styles.css";
import { useState } from "react";
import Button from "./components/Button/Button.js";
import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import { useSnackbar } from "react-simple-snackbar";

export default function App() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [chooseLocation, setChooseLocation] = useState(false);
  const [locationData, setLocationData] = useState({});

  return (
    <div className="App">
      <h1 onClick={() => openSnackbar("This is the content of the Snackbar.")}>
        Air Quality
      </h1>
      <Button
        btnText={chooseLocation}
        clickHandler={() => setChooseLocation((prev) => !prev)}
      />
      {chooseLocation && (
        <ChooseLocation
          locationData={locationData}
          setLocationData={setLocationData}
        />
      )}
    </div>
  );
}
