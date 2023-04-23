import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
    const handleTextChange = (event) => {
        setTodoText(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      if (todoText) {
        dispatch(
          addTodo({
            id: Date.now(),
            text: todoText,
            completed: false,
          })
        );
        setTodoText("");
      }
    };
  ;
  return (
    <form onSubmit={handleSubmit} className="flex mt-8">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={todoText}
        onChange={handleTextChange}
        className="flex-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeHolder="Add a todo"
      />
      <button
        type="submit"
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
