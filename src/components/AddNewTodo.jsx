import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>To do</label>
        <input
          type='text'
          id='todo'
          value={todos}
          onChange={(event) => setTodos(event.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddNewTodo;
