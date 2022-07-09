import React from 'react'
import '../../Styles/TodoForm.css'
import { TodoContext } from '../../Context/context'

function TodoForm() {
  const [newTodoTitle, setNewTodoTitle] = React.useState('');
  const [newTodoDescription, setNewTodoDescription] = React.useState('');
  const [emptyTodo, setEmptyTodo]= React.useState('')

  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);

  function cancelTodo (){
    setOpenModal(false)
  }

  function onChangeTitle(event){
    setNewTodoTitle(event.target.value)
  }
  function onChangeDescription(event){
    setNewTodoDescription(`${event.target.value}`)
  }
  function onSubmit(event){
    event.preventDefault();
    if (newTodoTitle.length <= 3 || newTodoDescription.length <= 5) {
      setEmptyTodo('Tienes que agregar un titulo o descripción con mas caractéres')
    }else{
      const encodingText = encodeURI(newTodoDescription);
      addTodo({title: newTodoTitle, text: encodingText})
    }
  }  

  return (
    <div className='FormContainer' onSubmit={onSubmit}>
        <form>
            <label>Crea un tarea</label>
            <input 
            className='todoTitle' 
            placeholder='Título'
            onChange={onChangeTitle}
            />

            <textarea 
            className='todoDescript' 
            placeholder='Descripción'
            onChange={onChangeDescription}
            />
            <div className='TodoForm-buttonContainer '>
              <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={cancelTodo}>Cancelar</button>
              <button type='submit' className='TodoForm-button TodoForm-button--add'>Crear</button>
            </div>
            <p className='emptyTodo'>{emptyTodo}</p>
        </form>
    </div>
  )
}

export { TodoForm }