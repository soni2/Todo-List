import React from 'react'
import '../Styles/createTodoBackground.css'
import { TodoContext } from '../Context/context'

function CreateTodoBackground() {

    const {
        setOpenModal,
        setOpenTodoForm,
        openTodoForm,
    } = React.useContext(TodoContext)

    function toOpenModal(){
        setOpenModal(!openTodoForm);
        setOpenTodoForm(!openTodoForm);
      }

  return (
    <div className='createTodoBackground'>
        <div className='plusSign' onClick={toOpenModal}>
            <div className='addIcon'/>
            <p className='addTodoText'>Haz clic aquí o al botón de "+" para crear nueva tarea.</p>
        </div>
    </div>
  )
}

export { CreateTodoBackground }