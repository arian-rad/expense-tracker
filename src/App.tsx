import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFitler";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Entertainment" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="mb-3">
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      ></ExpenseList>
      <ExpenseFilter
        onSelectedCategory={(category) => setSelectedCategory(category)}
      />
    </div>
  );
}

export default App;
