import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {

  const [dateFilter, setDateFilter] = useState("2020");
  const setDateFilterHandler = (date) => {
    setDateFilter(date);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateFilter;
  });

  return (
    <div>
      <Card className={"expenses"}>
        <ExpenseFilter
          selected={dateFilter}
          dateFilterHandler={setDateFilterHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}
