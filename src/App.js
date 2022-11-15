import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {

	const state = props.state;

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<Sidebar friends={state.messagesPage.friends} />
				<Main friends={state.messagesPage.friends}
					users={state.profilePage.users}
					dialogs={state.messagesPage.dialogs} />
			</div>
		</BrowserRouter>
	)
}

export default App;
