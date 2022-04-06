import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Router } from "./Router";
import theme from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
