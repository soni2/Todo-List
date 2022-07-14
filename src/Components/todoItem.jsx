import React from 'react'
import { TodoContext } from '../Context/context';
import '../Styles/todoItem.css'

function TodoItem({text, completed, onComplete, onDelete, title}) {

  const {
    setEditTextValue,
    setEditTitleValue,
    setOpenModal,
    setOpenEditModal} = React.useContext(TodoContext);

  function openEditModal(event){
    if (event.detail === 2) {
      setOpenEditModal(true)
      setOpenModal(true)
      setEditTextValue(text);
      setEditTitleValue(title);
    }
  }

  return (
    <li className={`itemContainer ${completed&& 'itemContainer--active'}`} key={text}>
      <div className='textContainer' onClick={openEditModal}>
        <h2 className={`titulo ${completed&& 'titulo--active'}`}>{`${title}`}</h2>
        <p className='texto'>{text}</p>
      </div>
      <div className='iconsContainer'>
        <span 
        className={`icon icon-check ${completed && "icon-check--active"}`} 
        onClick={onComplete}></span>
        <span 
        className='icon icon-delete'
        onClick={onDelete}
        ></span>
      </div>
    </li>
  )
}

export { TodoItem }