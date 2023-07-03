import React, { useContext } from 'react'
import { AppContext } from '../context'

function Navbar() {

  const { toggleMode , text, mode , onchange, value } = useContext(AppContext);

  return (
   <>
   <div className={`Navbar-${mode}`}>
    <h2>Image Gallery</h2>

    <div className="Search">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder='Search Images here' value={value} onChange={onchange}/> 
    </div>
 
        <label className='togglebutton' htmlFor="myTogglebtn"  >
      <input className='toggle_input' type="checkbox" id='myTogglebtn' onClick={toggleMode}/>
      <div className="toggle_fill"></div>
      <p>{text}</p>
    </label>
 
   
   </div>
   
   
   
   
   
   </>
  )
}

export default Navbar
