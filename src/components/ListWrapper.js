import React, { useState } from "react";
import { ListForm } from "./ListForm";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";
import { EditListForm } from "./EditListForm";
uuidv4();
export const ListWrapper = () => {
  const [lists, setLists] = useState([]);

  const addList = (list) => {
    setLists([
      ...lists,
      { id: uuidv4(), task: list, completed: false, isEditing: false },
    ]);
    console.log("added to list:", lists);
  };

  const toggleComplete = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              completed: !list.completed,
            }
          : list
      )
    );
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const editList = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              isEditing: !list.isEditing,
            }
          : list
      )
    );
  };

  const editItem = (task, id) => {
    setLists(
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              task,
              isEditing: !list.isEditing,
            }
          : list
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <ListForm addList={addList} />
      {lists.map((list, index) =>
        list.isEditing ? (
          <EditListForm editList={editItem} task={list} />
        ) : (
          <List
            task={list}
            key={index}
            toggleComplete={toggleComplete}
            deleteList={deleteList}
            editList={editList}
          />
        )
      )}
    </div>
  );
};
