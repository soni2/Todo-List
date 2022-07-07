import React from 'react'
import { CreateTodoButton } from './createTodoButton'
import { SearchTodo } from './searchTodo'
import { TodoItem } from './todoItem'
import { TodoList } from './todoList'
import TodoCounter from './todoCounter'
import { TodoContext } from '../Context/context'

function AppUI() {

    const {
        error,
        loading,
        searchedTodo,
        deletedTodo,
        completedTodo
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
        <header>
            <SearchTodo/>
            <TodoCounter />
        </header>
            <TodoList>
                {error && <p>Hubo un error cargando las tareas</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodo.length) && <p>Crea tu primera tarea</p>}
                
                {searchedTodo.map(todo =>
                <TodoItem 
                    key={todo.text}
                    title={todo.title}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completedTodo(todo.text)}
                    onDelete = {() => deletedTodo(todo.text)}

                />
                )}
            </TodoList>
        <CreateTodoButton/>
        </React.Fragment>
    )
}

export default AppUI