import React from "react";

function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-300">
      <ul className="flex justify-around list-none p-0">
        <li>
          <a href="/" className="block py-2 px-4">
            Home
          </a>
        </li>
        <li>
          <a href="/budget" className="block py-2 px-4">
            Budget
          </a>
        </li>
        <li>
          <a href="/balance" className="block py-2 px-4">
            Balance
          </a>
        </li>
        <li>
          <a href="/transaction" className="block py-2 px-4">
            Transaction
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
