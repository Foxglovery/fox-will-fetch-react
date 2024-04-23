import React, { useState } from "react";
import { ListForm } from "./ListForm";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";
uuidv4();
export const ListWrapper = () => {
  const [lists, setLists] = useState([]);

  const addList = (list) => {
    setLists([
      ...list,
      { id: uuidv4(), task: list, completed: false, isEditing: false },
    ]);
    console.log("added to list:", lists);
  };
  return (
    <div className="TodoWrapper">
      <ListForm addList={addList} />
      {lists.map((list, index) => (
        <List task={list} key={index} />
      ))}
    </div>
  );
};
