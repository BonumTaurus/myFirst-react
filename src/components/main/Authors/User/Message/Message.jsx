import './Message.css';

const Message = (props) => {
	return (
		<div className='Authors__messages'>
			<div className='message'>{props.message}</div>
		</div>
	)
}

export default Message;