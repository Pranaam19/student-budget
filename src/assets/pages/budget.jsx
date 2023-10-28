import React, { useState } from "react";

function Budget() {
  const [customBalance, setCustomBalance] = useState(1000);
  const [customBudget, setCustomBudget] = useState(1000);

  return (
    <div className="p-4 bg-gray-200 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Budget App</h1>
      <div className="bg-white rounded-lg p-4 space-y-4 flex-1">
        <div className="budget">
          <h2 className="text-xl font-semibold">Your Budget</h2>
          <div className="balance">
            <h3 className="text-2xl font-semibold">
              Balance: ${customBalance}
            </h3>
            <h3 className="text-2xl font-semibold">
              Budget: ${customBudget}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
