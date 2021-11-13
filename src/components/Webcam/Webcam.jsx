import React, { useCallback, useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";

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

export const WebcamCapture = () => {
	const [image, setImage]=useState('');
	const webcamRef = useRef(null);

	const capture = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			setImage(imageSrc)
		});

	useEffect(() => {
		window.localStorage.setItem('image', image);
		}, [image]);
	// const { heightt, widthh } = useWindowDimensions();
	return (
		<div className="webcam-container">
			<div className="webcam-img">
			
				{image === '' ? <Webcam
					audio={false}
					height={document.body.scrollHeight}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					width={document.body.scrollWidth}
					videoConstraints={videoConstraints}
				/> : <img src={image} />}
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
			</div>
		</div>
	);
};
