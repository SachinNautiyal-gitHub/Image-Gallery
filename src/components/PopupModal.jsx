import React, { useContext } from 'react'
import { AppContext } from '../context'

function PopupModal() {
 
   const {closeModal, showModal, currentImg, currentUserImg, downloadImg, currentDownload, currentUserName, currentViews , currentLikes} =useContext(AppContext);
   

  return (
 <>
  
  <div className= {`popupModal-${showModal}`}>
   <div className='btn-div'><button className="button" onClick={closeModal}><i className="fa-solid fa-xmark"></i></button></div>
    <div className="img-div"> 
      
      <div className="imgDetails1">
        <div className="userinfo">
         <img src={currentUserImg} alt="" />
         <p>{currentUserName}</p>

        </div>
        <div className="dowloadinfo">
          <p className="fa-solid fa-download">{currentDownload}</p>
         <button className="dwnld-btn"><a href={downloadImg} target="_blank" rel='noreferrer'> Download</a></button>
        </div>

      </div>
    
       <img src={currentImg} alt="" />
        <div className="imgDetails2">
      
        <p  class="fa-solid fa-eye">{currentViews}</p>
        <p class="fa-regular fa-heart">{currentLikes}</p>

      
      
        </div>
    
     
    </div>

  </div>

 
 </>
  )
}

export default PopupModal
