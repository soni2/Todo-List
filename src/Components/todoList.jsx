import React from 'react';
import '../Styles/todoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
      {props.children}
      </ul>
    </section>
  )
}

export { TodoList }