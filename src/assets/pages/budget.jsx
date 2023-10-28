import React, { useState } from "react";

function Budget() {
  const [transactions, setTransactions] = useState([]);
  const [customBalance, setCustomBalance] = useState(1000);
  const [customBudget, setCustomBudget] = useState(500);

  return (
    <div className="p-4 bg-gray-200 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Budget Planner</h1>
      <div className="bg-white rounded-lg p-4 space-y-4 flex-1">
        <div className="budget">
          <div className="balance">
            <h3 className="text-2xl font-semibold">
              Balance: ${customBalance}
            </h3>
            <h3 className="text-2xl font-semibold">
              Budget: ${customBudget}
            </h3>
          </div>
        </div>
        <div className="transactions">
          <h2 className="text-xl font-semibold">Transaction History</h2>
          <ul className="space-y-2">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="p-2 rounded border bg-white"
              >
                {transaction.text} ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-transaction">
          <h2 className="text-xl font-semibold">Add New Transaction</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const text = e.target.text.value;
              const amount = +e.target.amount.value;
              if (text && amount) {
                const newTransaction = {
                  id: Math.floor(Math.random() * 1000000),
                  text,
                  amount,
                };
                setTransactions([...transactions, newTransaction]);
                setCustomBalance(customBalance - amount);
                setCustomBudget(customBudget - amount);
                e.target.text.value = "";
                e.target.amount.value = "";
              }
            }}
          >
            <input
              type="text"
              name="text"
              placeholder="Transaction Name"
              className="w-full p-2 rounded border"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="w-full p-2 rounded border"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Budget;
