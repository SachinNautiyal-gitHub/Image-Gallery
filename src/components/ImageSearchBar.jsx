import React, { useContext } from 'react'
import { AppContext } from '../context';




function ImageSearchBar() {
  
  const bgImage = `https://source.unsplash.com/random/800x500?sig=1`;
  const {value , onchange} = useContext(AppContext);

  return (
   <>
   <div className="SearchBox" style={{ 
      backgroundImage: `url("${bgImage}")` 
    }}>
    
    <h1>Download high Quality Images by Creators</h1>
    <p>over 2.4 million+ stock images by our talented community</p>

    <div className="SearchBar">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder='Serach high resolution images, categories, Wallpaper' value={value} onChange={onchange} />
    </div>
    
   </div>
   
   
   
   
   </>
  )
}

export default ImageSearchBar
