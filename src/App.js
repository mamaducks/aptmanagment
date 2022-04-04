import logo from "./logo.svg";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import theme from "./theme";
import NavTabs from "./newUnused/LinkTabs";
import { Router } from "./Router";
import { AllEmployees, CurrentUserInfo } from "./newUnused/data/userAtoms";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <RecoilRoot>
          {/* <NavTabs /> */}
          <CurrentUserInfo />
          <Router />
        </RecoilRoot>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
