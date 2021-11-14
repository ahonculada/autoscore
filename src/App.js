import React, { useCallback, useEffect, useRef,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createWorker } from 'tesseract.js';
import './App.css';
import OCR from './components/OCR';
import Edit from './components/Edit';
import Home from './components/Home';

function App () {
//   const [source, setSource] = useState("");
//   const [pic, setPic] = useState("")

//  const handleCapture = useCallback(
//    (target) => {
//      if(target.files) {
//        if (target.files.length !== 0) {
//          const file = target.files[0];
//          const newUrl = URL.createObjectURL(file)
//          setSource(newUrl)
//        }
//      }
//    });

//   useEffect(() => {
//     setPic(source)
// 		},[source]);
  
//   useEffect(() => {
//     window.localStorage.setItem('image', pic);
//     },[pic]);
//   //   <div className="App">
//   //   {pic == "" ? <input
//   //         accept="image/*"
//   //         type="file"
//   //         capture="environment"
//   //         onChange={(e) => {handleCapture(e.target)
//   //            }}
//   //       /> : <OCR data ={pic}/>}
//   // </div>

  return (
  
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/edit" element={<Edit />}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;
