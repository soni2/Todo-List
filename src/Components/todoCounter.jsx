import React from 'react'
import { TodoContext } from '../Context/context';

function TodoCounter() {

  const {
    completed, 
    totalTodos,
    error,
    loading
  } = React.useContext(TodoContext);

  let todoVerify='';

  if (totalTodos !== 0){
    todoVerify = <h1>Tienes <span style={{fontWeight: 'bold'}}>{completed}</span> de <span style={{fontWeight: 'bold'}}>{totalTodos}</span> tareas completadas</h1>;
  } else {
    todoVerify = <h1>No tienes tareas por hacer, <span style={{fontWeight: 'bold'}}>¡crea tu primera tarea!</span></h1>
  }

  return (
    <div>
      {error && <h1>Hubo un error cargando las tareas</h1>}
      {loading && <h1>Estamos cargando, no desesperes...</h1>}
      {!loading && todoVerify}
    </div>
  )
}

export default TodoCounter