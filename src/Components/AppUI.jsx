import React from 'react'
import { CreateTodoButton } from './createTodoButton'
import { SearchTodo } from './searchTodo'
import { TodoItem } from './todoItem'
import { TodoList } from './todoList'
import TodoCounter from './todoCounter'

function AppUI({
    completedTodos,
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