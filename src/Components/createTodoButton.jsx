import React from 'react'
import { TodoContext } from '../Context/context';
import '../Styles/CreateTodoButton.css'

function CreateTodoButton() {

  const {
    setOpenModal,
    setOpenTodoForm,
    openTodoForm,
    setOpenThemeModal,
  } = React.useContext(TodoContext)

  function toOpenModal(){
    setOpenModal(!openTodoForm);
    setOpenTodoForm(!openTodoForm);
    setOpenThemeModal(false);
  }
  return (
    <button className='createTodoButton' onClick={toOpenModal}>
      +
    </button>
    )
}

export { CreateTodoButton }