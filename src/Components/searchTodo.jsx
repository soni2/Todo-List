import React from 'react'
import { TodoContext } from '../Context/context'
import '../Styles/SearchTodo.css'

function SearchTodo() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onChanging =(event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input 
    placeholder='Buscar tarea' 
    className='todoInput' 
    id="searchTodo" 
    onChange={onChanging}
    value={searchValue}/>
  )
}

export { SearchTodo }