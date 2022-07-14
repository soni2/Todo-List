import React from 'react'
import { TodoContext } from '../Context/context';
import '../Styles/CreateTodoButton.css'


function CreateTodoButton() {

  const {
    setOpenModal,
    setOpenTodoForm,
    openTodoForm,
    setOpenThemeModal,
    colorTheme,
    setOpenEditModal
  } = React.useContext(TodoContext)

  function toOpenModal(){
    setOpenModal(!openTodoForm);
    setOpenTodoForm(!openTodoForm);
    setOpenThemeModal(false);
    setOpenEditModal(false)
  }
  return (
    <button className={`createTodoButton button_${colorTheme.color} ${colorTheme.mode}`} onClick={toOpenModal}>
      +
    </button>
    )
}

export { CreateTodoButton }