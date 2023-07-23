import './App.css';
import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

var items = [];
items.push({ index: 1, value: "Learn React", done: false });
items.push({ index: 2, value: "Go Shopping", done: true });
items.push({ index: 3, value: "Buy Flowers", done: true });

function App() {
  const [todoItems, setItems] = useState(items);

  function reverseStatus(indexToUpdate) {
    const modifiedItems = todoItems.map((item) =>
      item.index === indexToUpdate
        ? { ...item, done: !item.done }
        : item
    );
  
    setItems(modifiedItems);
  }
  function addItem(newItemValue) {
    const newTodoItems = [
      {
        index: todoItems.length + 1,
        value: newItemValue,
        done: false,
      },
      ...todoItems, // Spread the existing items so that the new item is added at the beginning
    ];
    setItems(newTodoItems);
  }

  function removeItem(itemIndex){
    const newTodoItems = [...todoItems]; 
    newTodoItems.splice(itemIndex, 1);
    setItems(newTodoItems);
  }

  return (
    <div className='container'>
      <ToDoHeader></ToDoHeader>
      <ToDoList todoItems={todoItems} removeItem={removeItem} reverseStatus={reverseStatus}></ToDoList>
      <ToDoForm addItem={addItem} ></ToDoForm>
    </div>
  );
}

export default App;
