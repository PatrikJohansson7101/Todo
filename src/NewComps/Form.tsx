import React, { useState } from "react";
interface ITodoArray {
  value: string;
}
export default function Form() {
  //Input landar i Value.
  //TodoList är en actual Array.
  const [inputValue, setInputValue] = useState("");

  const defaultArray: ITodoArray[] = [];
  const [todoList, setTodoList] = useState(defaultArray);

  function addTodo(todoItem: any) {
    console.log(todoItem);
    console.log("Value", todoItem);
    console.log("TodoList:", todoList);

    setTodoList((defaultArray) => [...defaultArray, todoItem]);
  }

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={() => addTodo(inputValue)}>
        Add
      </button>
      {todoList.length ? (
        todoList.map((item: any, index) => <div key={index}>Item:{item}</div>)
      ) : (
        <div>No todos added!</div>
      )}
    </form>
  );
}
