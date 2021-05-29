import React, { createContext, useState } from 'react';

export const TodoListcontext = createContext();
const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: 'Pay bills', id: 1 },
    { text: 'Do your Homework', id: 2 },
    { text: 'Feed the dogs', id: 3 },
  ]);
  const addTodo = (todo) => {
    setTodos([
      ...todos, {
        text: todo, id: Math.random()
      }
    ])
  }

  return <div>
  <TodoListContextProvider value={ {todos, addTodo}}>
  {children}
  </TodoListContextProvider>
  </div>; 
};

export default TodoListContextProvider
