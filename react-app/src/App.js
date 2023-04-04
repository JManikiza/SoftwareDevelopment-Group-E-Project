// React imports
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import FooterNav from "./Components/FooterNav";
import HomePage from "./Pages/HomePage";
import Registration from "./Pages/Registration";



// Custom imports

function App() {
  return (
    <div>
      <Navigation />

      {/* route for the links to different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>

      <FooterNav />
    </div>
  );
}

export default App;
