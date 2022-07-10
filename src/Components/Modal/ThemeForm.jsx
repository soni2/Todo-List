import React from 'react'
import { TodoContext } from '../../Context/context'
import '../../Styles/ThemeFrom.css'

const lightsThemes = ["Azul", "Rojo", "Morado", "Verde", "Blanco"]
// const darksThemes = ["Azul", "Rojo", "Morado", "Verde", "Negro"]

function ThemeForm() {

  const {
    colorChange
  } = React.useContext(TodoContext)

  return (
    <div className='themeContainer'>
        <ul>
            {/* {darksThemes.map(tema=>(
              <li 
              className={`themeList dark${tema}`} 
              key={tema}
              onClick={()=>(setColorTheme({color:tema, mode:"dark"}))} 
              ></li>
            ))} */}
            {lightsThemes.map(tema=>(
              <li 
              className={`themeList light${tema}`} 
              key={tema}
              onClick ={()=>colorChange({color:tema, mode:"light"})}
               ></li>
            ))}
        </ul>
    </div>
  )
}

export default ThemeForm