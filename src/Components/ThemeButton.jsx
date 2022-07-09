import React from 'react'
import '../Styles/ThemeButton.css'
import theme from "../img/theme.svg"
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
    setOpenModal(!openThemeModal)
    setOpenTodoForm(false)
  }

  return (
    <button className='ThemeButton' onClick={toOpenThemeModal}>
      <img src={theme} alt="Tema" className="icon-theme"/>
    </button>
  )
}

export { ThemeButton }