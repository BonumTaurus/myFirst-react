import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/main/MainContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';


const App = (props) => {

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<HeaderContainer />
				<SidebarContainer />
				<MainContainer />
			</div>
		</BrowserRouter>
	)
}

export default App;
