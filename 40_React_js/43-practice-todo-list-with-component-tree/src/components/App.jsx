import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [addedText, setAddedText] = useState([]);

  function deleteItem(id) {
    setAddedText((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea allItems={setAddedText}/>
      <div>
        <ul>
          {addedText.map((item, index) => (
            <TodoItem key={index} id={index} text={item} delete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
