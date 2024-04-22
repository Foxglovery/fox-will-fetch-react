import React, { useState } from "react";

export const ListForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };
  return (
    <form className="ListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What Do You Desire?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Item
      </button>
    </form>
  );
};
