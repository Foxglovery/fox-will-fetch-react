import React, { useState } from "react";

export const EditListForm = ({ editList, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editList(value, task.id);

    setValue("");
  };
  return (
    <form className="ListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Make a change?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
