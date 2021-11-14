import React, { useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';
import OCR from './components/OCR';

function App () {
  const [source, setSource] = useState("");


  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  // useEffect(() => {
  //   <WebcamCapture data = {source}/> 
	// 	},[source]);

  return (
    <div className="App">
      <input
            accept="image/*"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
       {/* <WebcamCapture data = {source}/>  */}
       <OCR data ={source}/>
    </div>
  );
}

export default App;
