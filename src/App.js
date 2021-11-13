import React, { useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';

function App () {
  return (
    <div className="App">
      <WebcamCapture/> 
    </div>
  );
}

export default App;
