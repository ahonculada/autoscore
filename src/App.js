import React, { useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';

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

  return (
    <div className="App">
      <input
            accept="image/*"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
      <WebcamCapture/> 
    </div>
  );
}

export default App;
