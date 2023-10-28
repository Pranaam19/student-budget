import React from "react";

function BottomNavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "lightgray",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Budget</a>
        </li>
        <li>
          <a href="#">Balance</a>
        </li>
        <li>
          <a href="#">Transaction</a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
