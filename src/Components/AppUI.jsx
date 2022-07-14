import React from 'react'
import { CreateTodoButton } from './createTodoButton'
import { SearchTodo } from './searchTodo'
import { TodoItem } from './todoItem'
import { TodoList } from './todoList'
import TodoCounter from './todoCounter'
import { TodoContext } from '../Context/context'
import Modal from './Modal/index'
import { TodoForm } from './Modal/TodoForm'
import LoadingSkeleton from './LoadingSkeleton'
import {CreateTodoBackground} from './CreateTodoBackground'
import { ThemeButton } from './ThemeButton'
import ThemeForm from './Modal/ThemeForm'
import { EditTodoForm } from './Modal/EditTodoForm'

function AppUI() {

    const {
        searchedTodo,
        deletedTodo,
        completedTodo,
        openModal,
        loading,
        colorTheme,
        openTodoForm,
        openThemeModal,
        closeAllModals,
        openEditModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
        <header className={`header_${colorTheme.color} ${colorTheme.mode}`}>
            <SearchTodo/>
            <TodoCounter />
        </header>
            <TodoList>   
                {loading && <LoadingSkeleton />}             
                {(!loading && !searchedTodo.length) && <CreateTodoBackground/>}             
                {searchedTodo.map(todo =>
                <TodoItem 
                    key={`${parseInt(Math.random()*1000)}${todo.text}${todo.title}`}
                    title={todo.title}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completedTodo(todo.text)}
                    onDelete = {() => deletedTodo(todo.text)}
                    
                    />
                    )}
            </TodoList>
            {(openModal && openTodoForm) &&
                    <Modal>
                        <TodoForm/>
                    </Modal>
            }
            {(openModal && openEditModal) &&
                    <Modal>
                        <EditTodoForm/>
                    </Modal>
            }
            {openThemeModal &&
                [<ThemeForm/>,
                <div className='closeModals' onClick={()=>closeAllModals()}></div>]
            }
        <ThemeButton/>
        <CreateTodoButton />
        </React.Fragment>
    )
}

export default AppUI