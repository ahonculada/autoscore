import React, { useEffect, useState, useRef } from 'react';
import { createWorker } from 'tesseract.js';

function OCR (props) {

  const worker = createWorker({
    logger: m => console.log(m),
  });
  
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    let image = window.localStorage.getItem('image');
    // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    const { data: { text } } = await worker.recognize(props.data);
    
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
