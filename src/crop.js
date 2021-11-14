import React, { useCallback, useEffect, useRef,useState } from 'react';

class Crop extends React.Component {
    constructor(props) {
        //IMPLEMENT OTHER JUNK HERE
        this.state = {
            data: null //This is what our data will eventually be loaded into
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        /*LOAD DATA, INSERT BELOW LINE IN CALLBACK FUNCTION
            this.setState({
                data: //LOADED DATA
            });
        */
    }
    render() {
        if (!this.state.data) {
            return <div />
        }

        //WE HAVE DATA, DO A NORMAL RENDER
        return (
            <div id="login-page">
                <image></image>
            </div>
        );
    }
}
export function getCroppedImg(image, crop, fileName) {
	const canvas = document.createElement("canvas");
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = crop.width;
	canvas.height = crop.height;
	const ctx = canvas.getContext("2d");

	// New lines to be added
	const pixelRatio = window.devicePixelRatio;
	canvas.width = crop.width * pixelRatio;
	canvas.height = crop.height * pixelRatio;
	ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	ctx.imageSmoothingQuality = "high";

	console.log("PRINTING SCALEX: " + scaleX);

	ctx.drawImage(
		image,
		crop.x * scaleX,
		crop.y * scaleY,
		crop.width * scaleX,
		crop.height * scaleY,
		0,
		0,
		crop.width,
		crop.height
	);

	// As Base64 string
	const base64Image = canvas.toDataURL("image/jpeg");
	return base64Image;

	// As a blob
	// return new Promise((resolve, reject) => {
	// 	canvas.toBlob(
	// 		(blob) => {
	// 			blob.name = fileName;
	// 			resolve(blob);
	// 		},
	// 		"image/jpeg",
	// 		1
	// 	);
	// });
}