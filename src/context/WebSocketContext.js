import React from 'react';
import { createContext, useState, useEffect } from 'react';
const webSocketUrl = process.env.REACT_APP_wssURL;
// objects needed each user, total used words per user, sort users in table by most sent words to least.
// const words = str.split(' ').length; // use this to get words.
// going to do all my destructuring work here.

export const WebSocketContext = createContext(false, null);
// [is open, res value]
export const WebSocketProvider = ({ children }) => {
	const [isReady, setIsReady] = useState(false);
	const [resValue, setResValue] = useState(null);

	useEffect(() => {
		const socketConnection = new WebSocket(webSocketUrl);

		socketConnection.onopen = () => setIsReady(true);
		socketConnection.onmessage = (res) => setResValue(res.data);
	}, []);

	const context = [isReady, resValue];

	return (
		<WebSocketContext.Provider value={context}>
			{children}
		</WebSocketContext.Provider>
	);
};
