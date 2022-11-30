import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import MyFriends from './MyFriends/MyFriends';

const Sidebar = (props) => {

	let myFrends = props.sidebarPage.friends.map(friend => <MyFriends name={friend.name} ava={friend.ava} />);

	return (
		<div className='sidebar'>
			<nav className='sidebar__menu'>
				<div className='sidebar__link'>
					<NavLink to='/profile'>Profile</NavLink>
				</div>
				<div className='sidebar__link'>
					<NavLink to='/messages'>Messages</NavLink>
				</div>
				<div className='sidebar__link'>
					<NavLink to='/news'>News</NavLink>
				</div>
				<div className='sidebar__link'>
					<NavLink to='/music'>Music</NavLink>
				</div>
				<div className='sidebar__link'>
					<NavLink to='/settings'>settings</NavLink>
				</div>
			</nav>
			<h2 className='sidebar__title'>My friends</h2>
			<div className='sidebar__myFriends myFriends'>
				{myFrends}
			</div>
		</div>
	)
}

export default Sidebar;
