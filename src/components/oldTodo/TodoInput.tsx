import React, { ChangeEvent, useState } from "react";

interface ITodoArray {
  todo: string;
}

export default function TodoInput() {
  const defaultValue = { todo: "" };
  const [todoItem, setTodo] = useState(defaultValue);
  const defaultArray: ITodoArray[] = [];
  const [todoList, setTodoList] = useState(defaultArray);

  function updateTodo(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({ ...todoItem, [name]: value });
  }

  function addTodo(todoItem: any) {
    setTodoList([...todoList, todoItem]);
  }

  const handleSubmit = (event: any) => {
    try {
      // console.log("TodoItem:", todoItem);
      console.log("TodoList", todoList);
      event.preventDefault();
      addTodo([todoItem]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todoInput"
        placeholder="Insert Todo here"
        value={todoItem.todo}
        onChange={updateTodo}
      />
      <button type="submit">Add</button>
      {todoList.length ? (
        todoList.map((item: any, index) => (
          <div key={index}>Item:{item.todoItem}</div>
        ))
      ) : (
        <div>No todos added!</div>
      )}
    </form>
  );
}
