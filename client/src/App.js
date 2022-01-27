import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage"
import SignUp from "./components/SignUpPage/SignUpPage";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
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