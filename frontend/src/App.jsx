import React from "react";
import Header from "@components/Header";
import { Routes, Route } from "react-router-dom";
import Maps from "@pages/Maps";
import Synopsis from "@pages/Synopsis";
import Heros from "@pages/Heros";
import Encyclopedia from "@pages/Encyclopedia";
import Footer from "@components/Footer";

export default function App() {
  return (
    <div className="mainBody">
      <Header />
      <Routes>
        <Route path="/maps" element={<Maps />} />
        <Route path="/history" element={<Synopsis />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
      </Routes>
      <Footer />
    </div>
  );
}
