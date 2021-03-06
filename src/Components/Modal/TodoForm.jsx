import React from 'react'
import '../../Styles/TodoForm.css'
import { TodoContext } from '../../Context/context'

function TodoForm() {
  const [newTodoTitle, setNewTodoTitle] = React.useState('');
  const [newTodoDescription, setNewTodoDescription] = React.useState('');
  const [emptyTodo, setEmptyTodo]= React.useState('')

  const {
    setOpenModal,
    setOpenTodoForm,
    addTodo,
    colorTheme,
  } = React.useContext(TodoContext);

  function cancelTodo (){
    setOpenModal(false)
    setOpenTodoForm(false)
  }

  function onChangeTitle(event){
    setNewTodoTitle(event.target.value)
  }
  const onChangeDescription= (event)=>{
    setNewTodoDescription(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault();
    if (newTodoTitle.length <= 3 || newTodoDescription.length <= 5) {
      setEmptyTodo('Tienes que agregar un titulo o descripción con mas caractéres')
    }else{
      addTodo({title: newTodoTitle, text: newTodoDescription})
    }
  }

  return (
    <div className='formContainer' onSubmit={onSubmit}>
        <form>
            <div className='closeContainer'>
              <label className='formTitle'>Crea una tarea</label>
              <p className='closeButton' onClick={cancelTodo}>x</p>
            </div>
            <input 
            className={`todoTitle inputs${colorTheme.color}`} 
            placeholder='Título'
            onChange={onChangeTitle}
            />

            <textarea 
            className={`todoDescript inputs${colorTheme.color}`} 
            placeholder='Descripción'
            onChange={onChangeDescription}
            />
            <div className='TodoForm-buttonContainer '>
              <button type='button' className={`TodoForm-button cancel${colorTheme.color}`} onClick={cancelTodo}>Cancelar</button>
              <button type='submit' className={`TodoForm-button add${colorTheme.color}`}>Crear</button>
            </div>
            <p className='emptyTodo'>{emptyTodo}</p>
        </form>
    </div>)
  
}

export { TodoForm }