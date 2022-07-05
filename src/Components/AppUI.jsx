import React from 'react'
import { CreateTodoButton } from './createTodoButton'
import { SearchTodo } from './searchTodo'
import { TodoItem } from './todoItem'
import { TodoList } from './todoList'
import TodoCounter from './todoCounter'

function AppUI({
    loading,
    error,
    totalTodos,
    setSearchValue,
    searchValue,
    searchedTodo,
    deletedTodo,
    completedTodo,
    listOfCompleted
}) {
  return (
    <React.Fragment>
    <header>
      <SearchTodo
       setSearchValue = {setSearchValue}
       searchValue = {searchValue}
      />
      <TodoCounter
      completed = {listOfCompleted}
      totalTodos = {totalTodos}
      />
    </header>
    <TodoList>
        {error && <p>Hubo un error cargando las tareas</p>}
        {loading && <p>Las tareas estan procesando, espere un momento.</p>}
        {(!loading && !searchedTodo.length) && <p>Crea tu primera tarea</p>}
        
        {searchedTodo.map(todo =>
        <TodoItem 
            key={todo.text}
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completedTodo(todo.text)}
            onDelete = {() => deletedTodo(todo.text)}

        />
        )}
    </TodoList>
    <CreateTodoButton/>
  </React.Fragment>
  )
}

export default AppUI