import React, { useContext } from 'react'
import { AppContext } from '../context'

import Spiner from './Spiner';

function Images() {

  const { array , mode, isLoading, openModal} = useContext(AppContext);
  
  if(isLoading){
    
    return(
      <>
      <Spiner/>
      </>
    )

  }
   else  return (
    <>
     
      <div className={`images-${mode}`}>{array && array.map((element) => {

        return <div className="imageBox" key={element.id} onClick={()=>openModal(element)}>
          <img className='photo' src={element.urls.small} alt="" />


          <div className="imageDiscription">

           
              <img src={element.user.profile_image.medium} alt="" />
              <p> {element.user.username}</p>
              <p className="fa-regular fa-thumbs-up">{element.user.total_likes}</p>

            
          </div>


        </div>


      })}


      </div>
   

    
    </>
  )
}

export default Images
