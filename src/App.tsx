import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="mb-3">
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => handleDelete(id)}
      ></ExpenseList>
    </div>
  );
}

export default App;
