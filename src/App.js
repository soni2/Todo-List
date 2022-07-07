import React from 'react';
import './App.css';
import AppUI from './Components/AppUI';
import {TodoProvider} from './Context/context'

// const listaTodo = [
//   {text:"Aquí tamo papi", completed:false},
//   {text:"Activo", completed:false},
//   {text:"Yo que tu y me callo", completed:true},
//   {text:"asi es que se hace", completed:false}
//   ];

function App() {

  return (
     <TodoProvider>
       <AppUI/>
     </TodoProvider>
  );
}

export default App;
