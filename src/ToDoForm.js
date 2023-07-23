import React from "react";
import {useState} from "react";

export default function ToDoForm({addItem}) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    var newItemValue = text;
    if (newItemValue){
        console.log(newItemValue);
        addItem(newItemValue)
    }
  }

  

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        onChange={e => setText(e.target.value)}
        id="myInput"
        type="text"
        className="form-control"
        placeholder="Add a new ToDo"
      ></input>
      <button id="myButton" type="submit" className="btn btn-default">
        Add
      </button>
    </form>
  );
}
