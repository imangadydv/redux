import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form 
      onSubmit={addTodoHandler} 
      className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-4">What's on your mind?</h2>
      <div className="mb-4">
        <label 
          htmlFor="todo" 
          className="block text-lg font-medium text-white mb-2"
        >
          Add a Task
        </label>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
