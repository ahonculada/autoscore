import React, { useEffect, useState, useRef } from 'react';
import { createWorker } from 'tesseract.js';

function OCR() {

  const worker = createWorker({
    logger: m => console.log(m),
  });
  
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng+equ');
    await worker.initialize('eng+equ');
    let image = window.localStorage.getItem('image');
    // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    const { data: { text } } = await worker.recognize(image);
    
    setOcr(text);
  };

  
  const [ocr, setOcr] = useState('Recognizing...');
  


  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default OCR;
