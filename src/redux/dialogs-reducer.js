const SEND_MASSEGE = 'SEND-MASSEGE';
const ADD_MASSEGE = 'ADD-MASSEGE';

let initialState = {
	authors: [
		{ id: 1, name: 'Viola', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU', },
		{ id: 2, name: 'Andry', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDATwYwwNGQUhEBH7V8QlkfxJbSVkOjx_Jtg&usqp=CAU' },
		{ id: 3, name: 'Sasha', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoi6Z0xOdcuffZzWjB-I6DwyPs-y834ZUCw&usqp=CAU' },
		{ id: 4, name: 'Anton', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtsz7BUlaNJEAa3OuDWaR6ny2XQWUhrYpLQ&usqp=CAU' },
		{ id: 5, name: 'Serdg', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgZ6KHrutP7daU0-quEEPJUQRixpRGaSGOA&usqp=CAU' },
		{ id: 6, name: 'Pitty', frase: '', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfRL7vZ2zr3laHZzqrrJ9t_6lwvT_Rwi6AA&usqp=CAU' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'How is your the React?' },
		{ id: 4, message: 'Hello, i`m fine, thanks.' },
		{ id: 5, message: 'And are you?' },
	],
	newMessageText: "",
};

const DialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MASSEGE:
			let stateCopy = { ...state };
			stateCopy.newMessageText = action.textMessage;
			return stateCopy;
		case ADD_MASSEGE: {
			let stateCopy = { ...state };
			let newText = stateCopy.newMessageText;
			stateCopy.messages = [...state.messages];
			stateCopy.messages.push({ id: 6, message: newText });
			stateCopy.newMessageText = "";
			return stateCopy;
		}
		default:
			return state;
	}
}

export const changeMessageActionCreate = (newTextMessage) => ({ type: 'SEND-MASSEGE', textMessage: newTextMessage });
export const addMessageActionCreate = () => ({ type: 'ADD-MASSEGE' });

export default DialogsReducer;