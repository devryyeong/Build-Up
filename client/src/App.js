import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SignUp from "./components/SignUpPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;