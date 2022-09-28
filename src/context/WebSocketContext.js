import React from 'react';
// objects needed each user, total used words per user, sort users in table by most sent words to least.
// const words = str.split(' ').length; // use this to get words.
// going to do all my destructuring work here.
let wssMessageResponse =
	'Messages from server: Brett: Et eu aliqua magna Lorem nostrud. Incididunt labore nulla sunt amet duis ad in incididunt sunt. Cupidatat nulla proident excepteur ad aute culpa consectetur ut ea.';
// let testDestructure = wssMessageResponse.split(': ')[1];
let name = wssMessageResponse.split(': ')[1];
let userMessage = wssMessageResponse.split(': ')[2];
let userWordsused = userMessage.split(' ').length;
// console.log(testDestructure);
// wssMessageResponse.forEach((message) => {
// 	return null;
// });
const webSocketUrl = process.env.REACT_APP_wssURL;
let socketConnection = new WebSocket(webSocketUrl);
function WebSocketContext() {
	socketConnection.onopen = () => {
		console.log('Wss is success');
	};
	// socketConnection.onmessage = (message) => {
	// 	console.log('Messages from server:', message.data);
	// };
	return (
		<>
			<div>name = {name}</div>
			<div>message = {userMessage}</div>
			<div>word useage = {userWordsused}</div>
		</>
	);
}

export default WebSocketContext;
