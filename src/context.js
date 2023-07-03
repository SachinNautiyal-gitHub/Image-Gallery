

import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const Api = `https://api.unsplash.com/photos/random?&client_id=uWpCCUwSyEoZp91iZ9WzCeN70sYRU3zD4886425Ugas&count=30`;

const AppProvider = ({ children }) => {



  const [array, setArray] = useState([]);
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Dark Mode');
  const [value, setValue] = useState(" ");

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState('hide');
  const [currentImg , setCurrentImg] = useState(array[0]);
  const [currentUserImg , setCurrentUserImg] = useState(array[0]);
  const [currentUserName, setCurrentUserName] = useState(array[0]);
  const[currentDownload , setCurrentDownload] = useState(array[0]);
  const[downloadImg , setDownloadImg] = useState(array[0]);
  const[currentViews , setCurrentViews] = useState(array[0]);
  const[currentLikes , setCurrentLikes] = useState(array[0]);
  


  const onchange = (e) => {
   setValue(e.target.value);

   if(e.key === 'ENTER'){
    const getImages = async (Api) => {
      const response = await fetch(`${Api}&query=${value}`);
      const data = await response.json();
      console.log(data);
      setArray(data);
      setIsLoading(false);
  
    }
   }

  }



const toggleMode =()=>{
  if(mode === 'light'){
    setMode('dark');
    setText('Dark Mode Enabled');
  }
  else{
    setMode('light');
    setText('Dark Mode');
  }
}
 

  const openModal = (element) => {
     setShowModal('show');
     setCurrentImg(element.urls.full);
     setCurrentUserImg(element.user.profile_image.medium);
     setCurrentDownload(element.downloads);
     setCurrentUserName(element.user.username);
     setDownloadImg(element.links.html);
     setCurrentViews(element.views);
     setCurrentLikes(element.likes);
   
  }

  const closeModal =()=>{
    setShowModal('hide');
  }

  const getImages = async (Api) => {
    //  setIsLoading(true);
    const response = await fetch(Api);
    const data = await response.json();
    console.log(data);
    setArray(data);
    setIsLoading(false);

  }



  useEffect(() => {
    getImages(`${Api}&query=${value}`);

  }, [value]);




  return <AppContext.Provider value={{ array, setArray, toggleMode, text, mode, onchange,openModal,closeModal,
   value, isLoading, showModal, currentImg,currentUserImg ,
    currentUserName,currentDownload ,downloadImg, currentLikes, currentViews}} >
    {children}
  </AppContext.Provider>
};

export { AppContext, AppProvider };
