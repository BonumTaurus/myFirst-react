import AuthorsContainer from './Authors/AuthorsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import './Main.css';
import { Route, Routes } from 'react-router-dom';


const Main = (props) => {

	let authorsElements = props.dialogsPage.authors.map(user => <Route path={`messages/${user.id}`}
		element={<AuthorsContainer />}></Route>)

	return (
		<main className='main'>
			<Routes>
				<Route path='/messages' element={<AuthorsContainer />}></Route>
			</Routes>
			<Routes>
				{authorsElements}
			</Routes>
			<Routes>
				<Route path='/profile' element={<ProfileContainer />}></Route>
			</Routes>
		</main>

	)
}

export default Main;