import React, { useState, useEffect, useRef } from 'react';
const webSocketUrl = process.env.REACT_APP_wssURL;
// make this a .map you dummy.
// write a check for a new name.
// use state to only update the required data when its updated and not the whole page.
// maybe a react app is over kill for this simple table display.
const TabularTable = () => {
	// const [message, setMessage] = useState('');
	const userName = useRef('');
	const wordCount = useRef(0);
	const [destMessage, setDestMessage] = useState(null);
	const displayData = useRef([{ userName, wordCount }]);
	const socketTapped = useRef(null);
	useEffect(() => {
		const socketConnection = new WebSocket(webSocketUrl);
		socketConnection.onmessage = (res) => {
			let kirby = res.data;
			let name = kirby.split(': ')[0];
			let messageBody = kirby.split(': ')[1]; // not actually but nice to have I guess?
			let wordsUsed = messageBody.split(' ').length;
			let userMessage = {
				userName: name,
				message: messageBody,
				messageLength: wordsUsed,
			};
			setDestMessage(userMessage);
		};
		socketTapped.current = socketConnection;
	}, []);
	// let kirby = JSON.parse(destMessage); // key value pairs
	let boo = displayData.current.map((element) => {
		console.log(element);
		return element.userName;
		// 	return <div>{element}</div>;
	});
	return (
		<>
			<div>{boo}</div>
		</>
	);
};
export default TabularTable;
