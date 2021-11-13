import React, { useEffect, useState, useRef } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';

function App() {

  const worker = createWorker({
    logger: m => console.log(m),
  });
  
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    setOcr(text);
  };

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  // };

  // const paintToCanvas = () => {
  //   let video = videoRef.current;
  //   let photo = photoRef.current;
  //   let ctx = photo.getContext("2d");

  //   const width = 320;
  //   const height = 240;
  //   photo.width = width;
  //   photo.height = height;

  //   return setInterval(() => {
  //     ctx.drawImage(video, 0, 0, width, height);
  //   }, 200);
  // };

  // const takePhoto = () => {
  //   let photo = photoRef.current;
  //   let strip = stripRef.current;

  //   console.warn(strip);

  //   const data = photo.toDataURL("image/jpeg");

  //   console.warn(data);
  //   const link = document.createElement("a");
  //   link.href = data;
  //   link.setAttribute("download", "myWebcam");
  //   link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
  //   strip.insertBefore(link, strip.firstChild);
  // };

  const [ocr, setOcr] = useState('Recognizing...');

  // const videoRef = useRef(null);
  // const photoRef = useRef(null);
  // const stripRef = useRef(null);

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      {/* <button onClick={() => takePhoto()}>Take a photo</button>
      <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <canvas ref={photoRef} />
      <div>
        <div ref={stripRef} />
      </div> */}
      <p>{ocr}</p>
    </div>
  );
}

export default App;