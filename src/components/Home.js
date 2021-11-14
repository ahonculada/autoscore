// import React from 'react'
import React, { useCallback, useEffect, useRef,useState } from 'react';
import OCR from './OCR';
import { Link } from 'react-router-dom';

function Home() {
    const [source, setSource] = useState("");
    const [pic, setPic] = useState("")

    const handleCapture = useCallback(
    (target) => {
        if(target.files) {
        if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file)
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
    )
}


export default Home;