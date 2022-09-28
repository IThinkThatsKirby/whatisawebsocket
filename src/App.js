import 'beercss';
import TopBar from './component/TopBar';
import WebSocketContext from './context/WebSocketContext';
function App() {
	return (
		<>
			<TopBar />
			<WebSocketContext />
		</>
	);
}

export default App;
