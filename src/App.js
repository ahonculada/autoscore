import React, { useCallback, useEffect, useRef,useState } from 'react';
import { createWorker } from 'tesseract.js';
//import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';
import OCR from './components/OCR';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {getCroppedImg} from './crop.js';
import croppy from './crop.js';

function App () {
  const [source, setSource] = useState('');
  const[pic, setPic] = useState('')
  const [crop, setCrop] = useState({})
  const [cropImage, setCropImage] = useState('')
  const[file, setFile] = useState({})
  const[displayCrop, setDisplayCrop] = useState(false)


  // const handleCapture = (target) => {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setSource(newUrl);
  //     }
  //   }
  // };

  function displayCropPic () {
    setDisplayCrop(true);
  }
  
 const handleCapture = useCallback(
   (target) => {
    // var myCanvas = document.getElementById('mycanvas');
    // var ctx = myCanvas.getContext('2d');
    // var img = new Image();
    // img.onload = function(){
    //     myCanvas.width = img.width;
    //     myCanvas.height = img.height;
    //     ctx.drawImage(img, 0, 0);
    //     console.log(myCanvas.toDataURL('image/jpeg'));
    // };
    var img = new Image();

  // img.src = URL.createObjectURL(event.target.files[0]);


     if(target.files) {
       if (target.files.length !== 0) {
         const file = target.files[0];
         const newUrl = URL.createObjectURL(file)
         img.src = URL.createObjectURL(file);
         setSource(newUrl)
         setFile(img)
         console.log('IMAGE SOURCE TYPE: ' + typeof(img))
       }
     }
   }

 );

  useEffect(() => {
    setPic(source)
		},[source]);

  return (
    <div className="App">
      <input
            accept="image/*"
            type="file"
            capture="environment"
            onChange={(e) => {handleCapture(e.target)
               e.preventDefault()}}
          />
       {/* <WebcamCapture data = {source}/>  */}
      <ReactCrop src={pic} crop={crop} onChange={newCrop =>{setCrop(newCrop)}} />
      <button onClick={setCropImage(getCroppedImg(file, crop, 'image'))}>Get Cropped Image</button>
      <croppy />
      <image src={cropImage}></image>
      {/* <OCR data ={pic}/> */}
    </div>
  );
}

export default App;
