import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./assets/pages/home";
import Transaction from "./assets/pages/transaction";
import Budget from "./assets/pages/budget";
import Balance from "./assets/pages/balance";
import BottomNavbar from "./assets/components/navbar";

function App() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Student Budget Tracker
        </h1>
      </div>
    </>
  );
}

export default App;
