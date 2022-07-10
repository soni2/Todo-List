import React from 'react'
import '../Styles/ThemeButton.css'
import { TodoContext } from '../Context/context'

function ThemeButton() {

  const {
    openThemeModal,
    setOpenThemeModal,
    setOpenModal,
    setOpenTodoForm
  } = React.useContext(TodoContext);

  function toOpenThemeModal(){
    setOpenThemeModal(!openThemeModal)
    setOpenTodoForm(false)
  }

  return (
    <button className='ThemeButton' onClick={toOpenThemeModal}>
      <span className="icon-theme"/>
    </button>
  )
}

export { ThemeButton }