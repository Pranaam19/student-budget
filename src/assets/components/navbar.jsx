// import React from "react";

// function BottomNavbar() {
//   return (
//     <nav className="fixed bottom-0 w-full bg-gray-300">
//       <ul className="flex justify-around list-none p-0">``
//         <li>
//           <a href="/" className="block py-2 px-4">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="/budget" className="block py-2 px-4">
//             Budget
//           </a>
//         </li>
//         <li>
//           <a href="/balance" className="block py-2 px-4">
//             Balance
//           </a>
//         </li>
//         <li>
//           <a href="/transaction" className="block py-2 px-4">
//             Transaction
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default BottomNavbar;

import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

function BottomNavbar() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/budget">
          Budget
        </Button>
        <Button color="inherit" href="/balance">
          Balance
        </Button>
        <Button color="inherit" href="/transaction">
          Transaction
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default BottomNavbar;
