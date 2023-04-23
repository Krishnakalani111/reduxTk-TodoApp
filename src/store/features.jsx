import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  isDarkMode:false
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //inserting new task into exisiting array of todos
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos))
      console.log(state.todos);
    },
      removeTodo: (state, action) => {
        console.log("removeTodo reducer called");
      //creating a new array after filtering out the task to be removed.
        state.todos = state.todos.filter((todo) =>
            todo.id !== action.payload.id
        )
        state.todos = [...state.todos];
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
        }
      state.todos = [...state.todos];
      localStorage.setItem("todos", JSON.stringify(state.todos));
        console.log(state.todos)
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    }
  },
});

export const { addTodo, toggleTodo, removeTodo,toggleDarkMode } = todoSlice.actions;
export default todoSlice.reducer;
