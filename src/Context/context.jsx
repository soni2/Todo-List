import React from 'react'
import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodo,
        loading,
        error
      } = useLocalStorage('TODO_V1', [])
      const completedTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=> todo.text === text);
      
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodo(newTodos);
      }
      const addTodo = ({title, text}) =>{ 
        const newTodos = [...todos];
        newTodos.push(
          {completed: false,
          title,
          text})
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

      //Eventos de los modales

      const [openModal, setOpenModal] = React.useState(false);
      const [openTodoForm, setOpenTodoForm] = React.useState(false);
      const [openThemeModal, setOpenThemeModal] = React.useState(false);
      
      //Para cerrar el modal con la tecla ESC

      document.addEventListener('keydown', function(event){ 
        if(event.key === 'Escape'){
          setOpenModal(false)
          setOpenTodoForm(false)
          setOpenThemeModal(false)
        }
      })
      
      //Cambio de tema
      const  [colorTheme, setColorTheme] = React.useState("Morado");


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
            addTodo,
            completed : completedTodos,
            completedTodo,
            openModal,
            setOpenModal,
            colorTheme,
            setColorTheme,
            openTodoForm, 
            setOpenTodoForm,
            openThemeModal,
            setOpenThemeModal
        }}>
            {props.children}
        </TodoContext.Provider>
      )
}

export {TodoContext, TodoProvider};