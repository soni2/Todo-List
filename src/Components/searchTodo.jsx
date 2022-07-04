import React from 'react'
import '../Styles/SearchTodo.css'

function SearchTodo({searchValue, setSearchValue}) {

  const onChanging =(event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input 
    placeholder='Buscar todo' 
    className='todoInput' 
    id="searchTodo" 
    onChange={onChanging}
    value={searchValue}/>
  )
}

export { SearchTodo }