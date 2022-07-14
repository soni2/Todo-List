import React from 'react'
import '../Styles/ThemeButton.css'
import { TodoContext } from '../Context/context'

function ThemeButton() {

  const {
    openThemeModal,
    setOpenThemeModal,
    setOpenTodoForm,
    setOpenEditModal
  } = React.useContext(TodoContext);

  function toOpenThemeModal(){
    setOpenThemeModal(!openThemeModal)
    setOpenTodoForm(false)
    setOpenEditModal(false)

  }

  return (
    <button className='ThemeButton' onClick={toOpenThemeModal}>
      <span className="icon-theme"/>
    </button>
  )
}

export { ThemeButton }