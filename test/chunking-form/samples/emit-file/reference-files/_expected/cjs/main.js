'use strict';

var logo = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__dirname + '/assets/logo1-FquQRdV3.svg').href : new URL('assets/logo1-FquQRdV3.svg', document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || document.baseURI).href);

function showImage(url) {
	console.log(url);
	if (typeof document !== 'undefined') {
		const image = document.createElement('img');
		image.src = url;
		document.body.appendChild(image);
	}
}

showImage(logo);
Promise.resolve().then(function () { return require('./nested/chunk.js'); });

exports.showImage = showImage;
