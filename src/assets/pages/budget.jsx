import React, { useState } from "react";

function Budget() {
  const [customBalance, setCustomBalance] = useState(1000);
  const [customBudget, setCustomBudget] = useState(500);

  return (
    <div className="p-4 bg-gray-200 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Budget Planner</h1>
      <div className="bg-white rounded-lg p-4 space-y-4 flex-1">
        <div className="budget">
          <div className="balance">
            <h3 className="text-2xl font-semibold">
              Balance: Rs{customBalance}
            </h3>
            <h3 className="text-2xl font-semibold">
              Budget: Rs{customBudget}
            </h3>
          </div>
        </div>
        <div className="expense-options">
          <h2 className="text-xl font-semibold">Expense Options</h2>
          {/* Add your expense options here */}
        </div>
      </div>
    </div>
  );
}

export default Budget;
