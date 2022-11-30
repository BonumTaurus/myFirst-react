import './Authors.css';
import Authors from './Authors';
import { changeMessageActionCreate, addMessageActionCreate } from '../../../redux/dialogs-reducer'
import { connect } from 'react-redux';

// const AuthorsContainer = (props) => {

// 	let state = props.store.getState();

// 	let userElements = state.dialogsPage.authors.map(user => <User dispatch={props.dispatch} frase={user.frases} id={`messages/${user.id}`} name={user.name} ava={user.ava} />);
// 	let messageElements = state.dialogsPage.messages.map(obj => <Message message={obj.message} />)


// 	let onChangeTextMessage = (newTextMessage) => {
// 		props.dispatch(changeMessageActionCreate(newTextMessage))
// 	}

// 	let onClickButton = () => {
// 		props.dispatch(addMessageActionCreate())
// 	}

// 	return (
// 		<Authors userElements={userElements} messageElements={messageElements}
// 			onChangeText={onChangeTextMessage} onClick={onClickButton} newMessageText={state.dialogsPage.newMessageText} />
// 	)
// }

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		newMessageText: state.dialogsPage.newMessageText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(addMessageActionCreate());
		},
		onChangeText: (newTextMessage) => {
			dispatch(changeMessageActionCreate(newTextMessage))
		}
	}
}

const AuthorsContainer = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsContainer;


