import React from "react";
import Header from "@components/Header";
import { Routes, Route } from "react-router-dom";
import Maps from "@pages/Maps";
import Synopsis from "@pages/Synopsis";
import Heros from "@pages/Heros";
import Encyclopedia from "@pages/Encyclopedia";
import Egg from "@pages/Egg";
import Footer from "@components/Footer";
import Background from "@components/Background.jsx";

export default function App() {
  return (
    <div className="mainBody">
      <Background />
      <Header />
      <Routes>
        <Route path="/maps" element={<Maps />} />
        <Route path="/history" element={<Synopsis />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/welcome" element={<Egg />} />
        <Route path="*" element={<Maps />} />
      </Routes>
      <Footer />
    </div>
  );
}
