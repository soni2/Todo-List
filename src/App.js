import './App.css';
import React from 'react'
import { CreateTodoButton } from './Components/createTodoButton'
import { SearchTodo } from './Components/searchTodo'
import { TodoItem } from './Components/todoItem'
import { TodoList } from './Components/todoList'
import TodoCounter from './Components/todoCounter'

const listaTodo = [
  {text:"Aquí tamo papi", completed:false},
  {text:"Activo", completed:false},
  {text:"Yo que tu y me callo", completed:true},
  {text:"asi es que se hace", completed:false}
  ];

const completedTodos = listaTodo.filter(todo => !!todo.completed).length;
const totalTodos = listaTodo.length;

function App() {
  return (
     
    <React.Fragment>
    <header>
      <SearchTodo/>
      <TodoCounter
      completed = {completedTodos}
      totalTodos = {totalTodos}
      />
    </header>
    <TodoList>
      {listaTodo.map(todo =>
      <TodoItem 
      key={todo.text}
      title={todo.title}
      text={todo.text}
      completed={todo.completed}
      />
      )}
    </TodoList>
    <CreateTodoButton/>
  </React.Fragment>
  );
}

export default App;
