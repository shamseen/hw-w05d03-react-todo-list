import { useState } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";
import CompletedList from "./Components/CompletedIList/CompletedList";
import Form from "./Components/Form/Form";
import "./styles.css";
import toDoListData from "./data";

export default function App() {
  const [toDoItems, updateToDoItems] = useState(
    toDoListData.filter((item) => !item.completed)
  );
  const [completedItems, updateCompleted] = useState(
    toDoListData.filter((item) => item.completed)
  );

  const addToCompleted = (index) => {
    /*
    Create a copy of the the todo items
    Remove item at index from the todo list
    Update completed property to true
    Move Item to the top of the completed items list
    Use only State Setter Methods so that you don't
    update state directly
   */
  };

  const removeFromCompleted = (index) => {
    /*
    Create a copy of the the completed items
    Remove item from completed list
    Use only State Setter Methods so that you don't
    update state directly
   */
  };

  const handleSubmit = (item) => {
    /* 
      See Form Component and Data
      If this function is longer than one line it's probably wrong
    */
  };

  return (
    <div className="App">
      <h1>My to do list:</h1>
      <Form handleSubmit={handleSubmit} />
      <ToDoList toDoItems={toDoItems} addToCompleted={addToCompleted} />
      <CompletedList
        completedItems={completedItems}
        removeFromCompleted={removeFromCompleted}
      />
    </div>
  );
}
