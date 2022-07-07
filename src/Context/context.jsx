import React from 'react'
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos, 
        setItem: saveTodo,
        loading,
        error
      } = useLocalStorage('TODO_V1', [])
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

      return (
        <TodoContext.Provider value= {{
            error,
            loading,
            setSearchValue,
            searchValue,
            listOfCompleted : completedTodo,
            totalTodos,
            searchedTodo,
            deletedTodo,
            completed : completedTodos,
            completedTodo
        }}>
            {props.children}
        </TodoContext.Provider>
      )
}

export {TodoContext, TodoProvider};