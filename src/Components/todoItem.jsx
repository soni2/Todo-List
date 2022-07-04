import React from 'react'
import '../Styles/todoItem.css'

function TodoItem({text, completed, onComplete, onDelete}) {
  const title = text.slice(0,10);

  return (
    
    <li className={`itemContainer ${completed&& 'itemContainer--active'}`} key={text}>
      <div className='textContainer'>
        <h2 className={`titulo ${completed&& 'titulo--active'}`}>{`${title}...`}</h2>
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