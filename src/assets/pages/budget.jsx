import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const addExpense = () => {
    // Perform validation here (e.g., check for valid input)
    if (expenseAmount === "" || isNaN(expenseAmount) || expenseDate === "") {
      alert("Please enter a valid amount and date.");
      return;
    }

    // Update expenses array with a new expense
    const newExpense = { amount: parseFloat(expenseAmount), date: expenseDate };
    setExpenses([...expenses, newExpense]);

    // Clear input fields
    setExpenseAmount("");
    setExpenseDate("");
  };

  const chartData = expenses.map((expense, index) => ({
    name: `Expense ${index + 1}`,
    amount: expense.amount,
  }));

  return (
    <div className="p-4 bg-gray-200 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Budget Planner</h1>
      <div className="bg-white rounded-lg p-4 space-y-4 flex-1">
        <div className="expense-options">
          <h2 className="text-xl font-semibold">Add Expense</h2>
          <input
            type="number"
            placeholder="Expense amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <input
            type="date"
            placeholder="Expense date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
          />
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <div className="expense-details">
          <h2 className="text-xl font-semibold">Expense Details</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.date}</td>
                  <td>{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="expense-chart">
          <h2 className="text-xl font-semibold">Expense Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#FF0000" /> {/* Change fill to red */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Budget;
