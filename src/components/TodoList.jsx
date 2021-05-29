import React, { useContext,useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
// import AddNewTodo from './AddNewTodo';
import { TodoListcontext } from '../contexts/TodoListcontext';
const TodoList = () => {
  const [todo, setTodos]= useState('')
  const { todos, addTodo } = useContext(TodoListcontext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
const handleChange = (event)=>{
  console.log(event.target.value)
}
const handleFormSubmit = (event)=>{
  event.preventDefault();
  addTodo(todo)
}
  return (
    <div style={styles.theme}>
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p key={todo.id} className='item'>
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <form onSubmit={handleFormSubmit}>
      <label>Add todo:</label>
        <input type='text' id='todo' onChange ={handleChange} />
        <input type='AddToDo' />
      </form>
      <button onClick={changeTheme}>change the theme</button>
    </div>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  theme: {
    backgroundColor: theme.background,
    color: theme.text,
    textAlign: 'center',
  },
});

// // const {todos, setTodos} = useContext(TodoListcontext)
//   const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
//     useContext(ThemeContext);
//   const theme = isDarkTheme ? darkTheme : lightTheme;

//   const [count, setCount] = useState(0);
//   const addTodo = (text) => {
//     setTodos([...todos, { text, id: Math.random() }]);
//   };
//   useEffect(() => {
//     console.log('use effect', todos);
//   }, [todos]);
//   useEffect(() => {
//     console.log('use effect', count);
//   }, [count]);
//   return (
//     <div style={styles.theme}>
//       <ul>
//         {todos.map((todo) => {
//           return <li key={todo.id}>{todo.text}</li>;
//         })}
//       </ul>
//       <AddNewTodo addTodo={addTodo} />
//       <button
//       onClick={changeTheme}
//         onClick={() => {
//           setCount(count + 1);
//         }}>
//         Score: {count}
//       </button>
//     </div>
//   );//
