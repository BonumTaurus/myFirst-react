import './MyFriends.css';

const MyFriends = (props) => {
	return (
		<div className='myFriends__item'>
			<div className='myFriends__ava'>
				<img src={props.ava}></img>
			</div>
			<div className='myFriends__name'>{props.name}</div>
		</div>
	)
}

export default MyFriends;