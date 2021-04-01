import { useState } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";
import CompletedList from "./Components/CompletedIList/CompletedList";
import Form from "./Components/Form/Form";
import "./styles.scss";
import toDoListData from "./data";

export default function App() {
  const [toDoItems, updateToDoItems] = useState(
    toDoListData.filter((item) => !item.completed)
  );
  const [completedItems, updateCompleted] = useState(
    toDoListData.filter((item) => item.completed)
  );

  const addToCompleted = (index) => {
    // copying / manipulating newly completed
    const item = { ...toDoItems[index] };
    item.completed = true;

    // updating state
    updateCompleted([item, ...completedItems]);
    updateToDoItems([...toDoItems.filter((i) => i.title !== item.title)]);
  };

  const removeFromCompleted = (index) => {
    updateCompleted([
      ...completedItems.filter((i) => i.title !== completedItems[index].title)
    ]);
  };

  const handleSubmit = (item) => {
    updateToDoItems([...toDoItems, { title: item, completed: false }]);
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
