import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Page/LandingPage/LandingPage";
import MoodGallery from "./Page/MoodGallery/MoodGallery";
import MoodSummary from "./Page/MoodSummary/MoodSummary";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/moodgallery/:name" element={<MoodGallery />} />
          <Route path="/moodsummary" element={<MoodSummary/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
