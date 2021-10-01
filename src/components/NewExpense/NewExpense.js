import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onSaveExpenseData(expenseData);
  };

  const switchFormState = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          switchFormState={switchFormState}
        />
      ) : (
        <button onClick={switchFormState}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
