import React from "react";
import Categories from "../Categories";
interface Props {
  onSelect: (value: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select className="form-select" onChange={(e) => onSelect(e.target.value)}>
      <option value="">All</option>
      {Categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
