import React, { useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';

function App () {
  // let image = window.localStorage.getItem('image');
  // const worker = createWorker({
  //   logger: m => console.log(m),
  // });
  
  // const doOCR = async () => {
   
    
  //   console.log("hello there")
  //   await worker.load();
  //   await worker.loadLanguage('eng');
  //   await worker.initialize('eng');
  //   let image = window.localStorage.getItem('image');
  //   setImage(image);
  //   // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  //   const { data: { text } } = await worker.recognize(image);

  //   setOcr(text);
  // };

  // const [ocr, setOcr] = useState('Recognizing...');
  // const [image, setImage] = useState('');

  // useEffect(() => {
  //   doOCR();

  // },[image]);

  return (
    <div className="App">
      <WebcamCapture/> 
    </div>
  );
}

export default App;
