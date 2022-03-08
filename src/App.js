import logo from "./logo.svg";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import NavTabs from "./App/LinkTabs";
import { Router } from "./Router";
import { AllEmployees, CurrentUserInfo } from "./data/userAtoms";


function App() {
  return (
    <div>
      <RecoilRoot>

        <NavTabs />
        <CurrentUserInfo />
      <Router />
      </RecoilRoot>
      
    </div>
  );
}

export default App;
