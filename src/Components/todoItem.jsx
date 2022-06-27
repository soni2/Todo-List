import React from 'react'
import '../Styles/todoItem.css'

function TodoItem({text,completed}) {
  const title = text.slice(0,10);

  return [
    
    <li className={`itemContainer ${completed&& 'itemContainer--active'}`}>
      <div>
        <h2 className={`titulo ${completed&& 'titulo--active'}`}>{`${title}...`}</h2>
        <p className='texto'>{text}</p>
      </div>
      <div>
        <span className={`icon icon-check ${completed && "icon-check--active"}`}></span>
        <span className='icon icon-delete'>X</span>
      </div>
    </li>,
    <hr className={`${completed&& 'hr--active'}`} />
  ]
}

export { TodoItem }