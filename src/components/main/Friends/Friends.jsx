import './Friends.css';
import User from './User/User';
import Message from './Message/Message';

const Friends = (props) => {

	let userElements = props.friends.map(user => <User id={`messages/${user.id}`} name={user.name} />);

	let dialog = props.dialogs.map(frases => <Message message={frases.frases} />)

	return (
		<div className='main__friends friends'>
			<ul className='friends__list'>
				{userElements}
			</ul>
			{dialog}
		</div>
	)
}

export default Friends;