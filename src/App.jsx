import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Transaction from "./assets/pages/transaction";
import Budget from "./assets/pages/budget";
import Balance from "./assets/pages/balance";
import Authentication from "./assets/pages/auth";
import BottomNavbar from "./assets/components/navbar";

function App() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Student Budget Tracker
        </h1>
        <Router>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/balance" element={<Balance />} />
          </Routes>
        </Router>
        {window.location.pathname !== "/" ? <BottomNavbar /> : null}
      </div>
    </>
  );
}

export default App;
