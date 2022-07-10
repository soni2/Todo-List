import React from 'react'
import ReactDOM from 'react-dom'
import '../../Styles/modal.css'

function Modal({children}){

    return ReactDOM.createPortal (
    
        <div 
        className='addTodoModal'
        >{children}</div>,
    document.getElementById("modal"))
}

export default Modal;
