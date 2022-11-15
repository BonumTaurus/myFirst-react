import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {

	const state = props.state;
	const messagesPage = state.messagesPage;
	const profilePage = state.profilePage;

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<Sidebar friends={messagesPage.friends} />
				<Main friends={messagesPage.friends}
					users={profilePage.users}
					dialogs={messagesPage.dialogs} />
			</div>
		</BrowserRouter>
	)
}

export default App;
