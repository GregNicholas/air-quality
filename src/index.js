import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SnackbarProvider, { useSnackbar } from "react-simple-snackbar";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </StrictMode>,
  rootElement
);
