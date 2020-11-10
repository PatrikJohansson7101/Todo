import React, { useState } from "react";
interface ITodoArray {
  value: string;
}
export default function Form() {
  const [value, setValue] = useState("");

  const defaultArray: ITodoArray[] = [];
    const [todoList, setTodoList] = useState(defaultArray);
    
    function addTodo(todoItem: any) {
        setTodoList([...todoList, todoItem]);
      }

  function addTodo() {
    console.log("AddTodoFunktionen:");
    console.log("Value", value);
    console.log("TodoList:", todoList);
  }

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      {/* {value} */}
    </form>
  );
}
