import React from 'react';
// Moved websocket to the topBar since It will have the buttons. Its an in house data tool so this should be fine for security.
// Maybe I could move it to context to and pass some props if I have time.
const socket = new WebSocket('wss://tso-take-home-chat-room.herokuapp.com/');
//listen for them messages from

function topBar() {
	socket.onopen = () => {
		console.log('Wss is success');
	};
	socket.onmessage = (message) => {
		console.log('Messages from server:', message);
	};
	return (
		<header class='tertiary-container'>
			<nav>
				<button class='circle transparent'>
					<i>menu</i>
				</button>
				<h5 class='max center-align'>Title</h5>
				<button class='circle transparent'>
					<img class='responsive' src='/favicon.png' alt='remvoethislatter' />
				</button>
			</nav>
		</header>
	);
}

export default topBar;
