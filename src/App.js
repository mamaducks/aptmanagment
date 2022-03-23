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
import NavTabs from "./App/LinkTabs";
import { Router } from "./Router";
import { AllEmployees, CurrentUserInfo } from "./data/userAtoms";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <RecoilRoot>
          <NavTabs />
          <CurrentUserInfo />
          <Router />
        </RecoilRoot>
      </div>
    </BrowserRouter>
  );
}

export default App;
