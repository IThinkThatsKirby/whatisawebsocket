import React from 'react';
const webSocketUrl = process.env.REACT_APP_wssURL;
let socket = new WebSocket(webSocketUrl);

function WebSocketContext() {
	return <div>WebSocketContext</div>;
}

export default WebSocketContext;
