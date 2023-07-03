import React from 'react'
import Images from './Images'
import ImageSearchBar from './ImageSearchBar'
import Navbar from './Navbar'
import PopupModal from './PopupModal';

function Home() {
  return (
   <>
    <PopupModal/>
   <Navbar/>
   <ImageSearchBar/>
   <Images/>
  
   
   
   </>
  )
}

export default Home
