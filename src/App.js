import logo from './logo.svg';
import './App.css';
const socket = new WebSocket('wss://tso-take-home-chat-room.herokuapp.com/');
//listen for them messages from
socket.onopen = () => {
	console.log('Wss is success');
};
socket.onmessage = (message) => {
	console.log('Messages from server:', message);
};

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
