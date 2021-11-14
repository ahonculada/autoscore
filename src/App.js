import React, { useCallback, useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
// import { WebcamCapture } from './components/Webcam/Webcam';
import OCR from './components/OCR';

function App () {
  const [source, setSource] = useState("");
  const [pic, setPic] = useState("")


  // const handleCapture = (target) => {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setSource(newUrl);
  //     }
  //   }
  // };
  
 const handleCapture = useCallback(
   (target) => {
     if(target.files) {
       if (target.files.length !== 0) {
         const file = target.files[0];
         const newUrl = URL.createObjectURL(file)
        //  console.log("here you go")
        //  console.log(newUrl.slice(5,newUrl.length))
        //  setSource(newUrl.slice(5,newUrl.length))
         setSource(newUrl)
       }
     }
   });

  useEffect(() => {
    setPic(source)
		},[source]);
  
  useEffect(() => {
    window.localStorage.setItem('image', pic);
    },[pic]);

  return (
    <div className="App">
      {pic == "" ? <input
            accept="image/*"
            type="file"
            capture="environment"
            onChange={(e) => {handleCapture(e.target)
               }}
          /> : <OCR data ={pic}/>}
       
    </div>
  );
}

export default App;
