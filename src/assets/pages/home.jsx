import React, { useState } from "react";
import InputDialog from "../components/input";

function Home() {
  const [balance, setBalance] = useState(500); // Initial balance, you can change this as needed
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);

  // Function to add or remove balance
  const updateBalance = (amount) => {
    setBalance(balance + amount);
  };

  // Function to update expense and income amounts
  const updateExpense = (amount) => {
    setExpenseAmount(expenseAmount + amount);
  };

  const updateIncome = (amount) => {
    setIncomeAmount(incomeAmount + amount);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg shadow p-2 text-center">
          <h2 className="text-lg font-semibold">Current Balance</h2>
          <p className="text-2xl font-bold text-green-600">
            RS{balance.toFixed(2)}
          </p>
          <div className="flex justify-between mt-2">
            <InputDialog />
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="flex justify-between">
            <div className="bg-white rounded-lg shadow p-2 w-1/2">
              <h2 className="text-lg font-semibold">Expense</h2>
              <p className="text-2xl font-bold text-red-600">
                RS{expenseAmount.toFixed(2)}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-2 w-1/2">
              <h2 className="text-lg font-semibold">Income</h2>
              <p className="text-2xl font-bold text-green-600">
                RS{incomeAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-white rounded-lg shadow p-2">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          {/* You can display recent activity information here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
