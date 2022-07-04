import React from 'react';
import './App.css';
import AppUI from './Components/AppUI';

// const listaTodo = [
//   {text:"Aquí tamo papi", completed:false},
//   {text:"Activo", completed:false},
//   {text:"Yo que tu y me callo", completed:true},
//   {text:"asi es que se hace", completed:false}
//   ];

function useLocalStorage (itemName, initialValue){

  const todoLocal = localStorage.getItem(itemName);
  let parsedItem;

  if (!todoLocal) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemName))
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ]
}

function App() {

  const [todos, saveTodo] = useLocalStorage('TODO_V1', [])
  const completedTodo = (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
  
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos);
  }
  const deletedTodo = (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
  
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodo(newTodos);
  }

  const [searchValue, setSearchValue] = React.useState('')
  let searchedTodo;

  if (!searchValue.length>=1){
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter( todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText)
    })}
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  React.useEffect(()=>{

  }, todos
  );

  return (
     
    <AppUI
    setSearchValue = {setSearchValue}
    searchValue = {searchValue}
    listOfCompleted = {completedTodos}
    totalTodos = {totalTodos}
    searchedTodo = {searchedTodo}
    deletedTodo = {deletedTodo}
    completedTodo = {completedTodo}
    />
  );
}

export default App;
