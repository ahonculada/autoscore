import React, { useCallback, useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import OCR from '../OCR';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
	width: 220,
	height: 200,
	facingMode: "user"
};

// function getWindowDimensions() {
// 	const { innerWidth: width, innerHeight: height } = window;
// 	return {
// 		width,
// 		height
// 	};
// }

// export default function useWindowDimensions() {
// 	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

// 	useEffect(() => {
// 		function handleResize() {
// 			setWindowDimensions(getWindowDimensions());
// 		}

// 		window.addEventListener('resize', handleResize);
// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	return windowDimensions;
// }

export const WebcamCapture = (props) => {
	const [image, setImage]=useState('');
	const [crop, setCrop] = useState({});
	const webcamRef = useRef(null);

	const capture = useCallback(
		() => {
			// const imageSrc = webcamRef.current.getScreenshot();
			// window.localStorage.setItem('image',imageSrc)
			console.log("Here " + props.data)
			setImage(props.data);
			// setImage(imageSrc)
		});

	// function CropDemo({ src }) {
	// 	const [crop, setCrop] = useState();
	// 	return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
	// 	}

	useEffect(() => {
		// var canvas = document.getElementById('canvas');
		// var dataURL = canvas.toDataURL();
		window.localStorage.setItem('image', image)
		},[image]);

	return (
		<div className="webcam-container">
			<div className="webcam-img">

				{image === '' ? <Webcam
					audio={false}
					height={window.innerHeight}
					ref={webcamRef}
					screenshotFormat="image/png"
					width={window.innerWidth}
					videoConstraints={videoConstraints}
				/> : <img src={image} alt={''} />}
			</div>
			<div>
				{image !== ''?
					<button onClick={(e) => {
						e.preventDefault();
						setImage('')
					}}
						className="webcam-btn">
						Retake Image</button> :
						<button onClick={(e) => {
							e.preventDefault();
							capture();
						}}
							className="webcam-btn">Capture</button>
				}
								
				<OCR/>
				
		</div>
		</div>
	);
};
