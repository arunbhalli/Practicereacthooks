import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListcontext';

function App() {
  return (
    <div className='App'>
      <div>
        <AuthContextProvider>
          <TodoListContextProvider>
            <ThemeContextProvider>
              <TodoList />
              <Navbar />
            </ThemeContextProvider>
          </TodoListContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
