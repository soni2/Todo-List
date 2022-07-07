import React from 'react'
import { TodoContext } from '../Context/context';

function TodoCounter() {

  const {
    completed, totalTodos
  } = React.useContext(TodoContext);

  let todoVerify='';

  if (totalTodos !== 0){
    todoVerify = `Tienes ${completed} de ${totalTodos} tareas completadas`;
  } else {
    todoVerify = "No tienes tareas por hacer, crea tu primera tarea!"
  }

  return (
    <h1>{todoVerify}</h1>
  )
}

export default TodoCounter