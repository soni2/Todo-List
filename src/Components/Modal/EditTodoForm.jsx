import React from 'react'
import '../../Styles/TodoForm.css'
import { TodoContext } from '../../Context/context'

function EditTodoForm() {
  
  const {
    setOpenModal,
    setOpenTodoForm,
    colorTheme,
    editTitleValue,
    editTextValue,
    setOpenEditModal,
    editTodo
  } = React.useContext(TodoContext);

  const [newTodoTitle, setNewTodoTitle] = React.useState(editTitleValue);
  const [newTodoDescription, setNewTodoDescription] = React.useState(editTextValue);
  const [emptyTodo, setEmptyTodo]= React.useState('')

  function cancelTodo (){
    setOpenModal(false)
    setOpenTodoForm(false)
    setOpenEditModal(false)
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
      editTodo({title: newTodoTitle, text: newTodoDescription})
      setOpenEditModal(false)

    }
  }

  return (
    <div className='formContainer' onSubmit={onSubmit}>
        <form>
            <div className='closeContainer'>
              <label className='formTitle'>Editar tarea</label>
              <p className='closeButton' onClick={cancelTodo}>x</p>
            </div>
            <input 
            className={`todoTitle inputs${colorTheme.color}`} 
            placeholder='Título'
            value={newTodoTitle}
            onChange={onChangeTitle}
            />

            <textarea 
            className={`todoDescript inputs${colorTheme.color}`} 
            placeholder='Descripción'
            value={newTodoDescription}
            onChange={onChangeDescription}
            />
            <div className='TodoForm-buttonContainer '>
              <button type='button' className={`TodoForm-button cancel${colorTheme.color}`} onClick={cancelTodo}>Cancelar</button>
              <button type='submit' className={`TodoForm-button add${colorTheme.color}`}>Editar</button>
            </div>
            <p className='emptyTodo'>{emptyTodo}</p>
        </form>
    </div>)
  
}

export { EditTodoForm }