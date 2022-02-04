import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage"
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignUpPage2 from "./components/SignUpPage/SignUpPage2";
import SignUpSuccess from "./components/SignUpPage/SignUpSuccess";
import LandingPage from "./components/LandingPage/LandingPage";
import FindingID from "./components/FindingID,PW/FindingID";
import FindingID2 from "./components/FindingID,PW/FindingID2";
import ChangingPW from "./components/FindingID,PW/ChangingPW";
import ChangingPW2 from "./components/FindingID,PW/ChangingPW2";
import ChangingPW3 from "./components/FindingID,PW/ChangingPW3";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/signup2" element={<SignUpPage2 />} />
          <Route
            path="/signup/signup2/signupsucess"
            element={<SignUpSuccess />}
          />
        </Routes>
      </BrowserRouter>
      <SignUpPage2 />
    </div>
  );
}

export default App;