import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../features/todoSlice";

const Todos = () => {
   const todos = useSelector(state => state.todos);
   const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Your Todo List</h2>
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className="flex justify-between items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-800 text-lg font-medium">{todo.text}</span>
              <button 
                onClick={() => dispatch(removeTodo(todo.id))} 
                className="text-red-500 bg-gray-100 px-4 py-2 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-200 text-lg text-center">No todos available. Add some!</p>
      )}
    </div>
  );
};

export default Todos;
