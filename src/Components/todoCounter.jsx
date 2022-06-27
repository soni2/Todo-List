import React from 'react'

function TodoCounter({completed, totalTodos}) {
  return (
    <h1>{`Tienes ${completed} de ${totalTodos} tareas completadas`}</h1>
  )
}

export default TodoCounter