import React from 'react'
import { TodoContext } from '../../Context/context'
import '../../Styles/ThemeFrom.css'

const lightsThemes = ["Azul", "Rojo", "Morado", "Verde", "Blanco"]
// const darksThemes = ["Azul", "Rojo", "Morado", "Verde", "Negro"]

function ThemeForm() {

  const {
    setColorTheme
  } = React.useContext(TodoContext)

  return (
    <div className='themeContainer'>
        <ul>
            <h3>Claros</h3>
            {lightsThemes.map(tema=>(
              <li 
              className={`themeList light${tema}`} 
              key={tema}
              onClick ={()=>(setColorTheme({color:tema, mode:"light"}))}
               ><p>{tema}</p></li>
            ))}
        </ul>
        {/* <ul>
            <h3>Oscuros</h3>
            {darksThemes.map(tema=>(
              <li 
              className={`themeList light${tema}`} 
              key={tema}
              onClick={()=>(setColorTheme({color:tema, mode:"dark"}))} 
              ><p>{tema}</p></li>
            ))}
        </ul> */}
    </div>
  )
}

export default ThemeForm