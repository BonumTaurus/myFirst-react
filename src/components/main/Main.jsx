import Friends from './Friends/Friends';
import './Main.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';

const Main = (props) => {

	let usersElements = props.friends.map(user => <Route path={`messages/${user.id}`} element={<Friends friends={props.friends} dialogs={props.dialogs} />}></Route>)

	return (
		<main className='main'>
			<Routes>
				<Route path='/messages' element={<Friends friends={props.friends} dialogs={props.dialogs} />}></Route>
			</Routes>
			<Routes>
				{usersElements}
			</Routes>
			<Routes>
				<Route path='/profile' element={<Profile users={props.users} />}></Route>
			</Routes>
		</main>

	)
}

export default Main;