import { NavLink } from 'react-router-dom'
import './User.css'

const User = (props) => {
	return (
		<li>
			<NavLink to={`/${props.id}`}>{props.name}</NavLink>
		</li>
	)
}

export default User;