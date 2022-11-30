import './Authors.css';
import React from 'react';
import User from './User/User'
import Message from './User/Message/Message'

const Authors = (props) => {
	let userElements = props.dialogsPage.authors.map(user => <User dispatch={props.dispatch} frase={user.frases} id={`messages/${user.id}`} name={user.name} ava={user.ava} />);
	let messageElements = props.dialogsPage.messages.map(obj => <Message message={obj.message} />)

	let textareaRef = React.createRef();

	let onChangeTextMessage = () => {
		let text = textareaRef.current.value;
		props.onChangeText(text);
	}

	let onClickButton = () => {
		props.onClick();
	}

	return (
		<div className='main__Authors Authors'>
			<ul className='Authors__list'>
				{userElements}
			</ul>
			<div className='Authors__send-box'>
				{messageElements}
				<textarea className='Authors__textarea' onChange={onChangeTextMessage} ref={textareaRef} value={props.newMessageText}></textarea>
				<button className='Authors__button' onClick={onClickButton} >send</button>
			</div>
		</div>
	)
}

export default Authors;