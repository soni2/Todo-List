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

      //Tarea completada
      const completedTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=> todo.text === text);
      
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodo(newTodos);
      }


      //Agregar Tarea
      const addTodo = ({title, text}) =>{ 
        const newTodos = [...todos];
        newTodos.push(
          {completed: false,
          title,
          text})
        saveTodo(newTodos);
      }

      //Eliminar tareas
      const deletedTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=> todo.text === text);
      
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodo(newTodos);
      }
      
      //Buscador
      const [searchValue, setSearchValue] = React.useState('')
      let searchedTodo;
    
      if (!searchValue.length>=1){
        searchedTodo = todos;
      } else {
        searchedTodo = todos.filter( todo =>{
          const todoText = todo.title.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText)
        })}
      
      //Contadores
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;

      //Eventos de los modales

      const [openModal, setOpenModal] = React.useState(false);
      const [openTodoForm, setOpenTodoForm] = React.useState(false);
      const [openThemeModal, setOpenThemeModal] = React.useState(false);
      
      //Para cerrar el modal con la tecla ESC

      document.addEventListener('keydown', function(event){ 
        if(event.key === 'Escape'){
        }
      })

      //Cierre de todos los modales al mismo tiempo

      function closeAllModals(){
        setOpenModal(false)
        setOpenTodoForm(false)
        setOpenThemeModal(false)
      }
      
      //Cambio de tema
      
      const currentColor = JSON.parse(localStorage.getItem("color"));
      const  [colorTheme, setColorTheme] = React.useState(currentColor);
      if(!colorTheme){
        setColorTheme({color: "Morado", mode:"light"});
      }
      function colorChange(props){
        const stringyfiedColor = JSON.stringify(props);
        localStorage.setItem("color",stringyfiedColor);
        setColorTheme(props)
      }

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
            openTodoForm, 
            setOpenTodoForm,
            openThemeModal,
            setOpenThemeModal,
            colorChange,
            closeAllModals
        }}>
            {props.children}
        </TodoContext.Provider>
      )
}

export {TodoContext, TodoProvider};