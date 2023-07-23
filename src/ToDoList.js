import React from "react";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({todoItems, removeItem, reverseStatus}) {
    var items = todoItems.map((item) => {
        return (
            <ToDoListItem reverseStatus={reverseStatus} removeItem={removeItem} k={item.index} item={item} index={item.index}></ToDoListItem>
        );
    });
  return (
    <div>
        <ul className="list-group">
            {items}
        </ul>
    </div>
  );
}
