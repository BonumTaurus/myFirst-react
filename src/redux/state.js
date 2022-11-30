import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import SidebarReducer from './sidebar-reducer';


let store = {
	_state: {
		profilePage: {
			users: [
				{ like: 3, name: 'Andry', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDATwYwwNGQUhEBH7V8QlkfxJbSVkOjx_Jtg&usqp=CAU' },
				{ like: 17, name: 'Viola', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU' },
				{ like: 10, name: 'Sasha', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoi6Z0xOdcuffZzWjB-I6DwyPs-y834ZUCw&usqp=CAU' },
				{ like: 34, name: 'Anton', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtsz7BUlaNJEAa3OuDWaR6ny2XQWUhrYpLQ&usqp=CAU' }
			],
			newPostText: ''
		},

		dialogsPage: {
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
		},

		sidebarPage: {
			friends: [
				{ id: 1, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu9OerVpHkWSPio5jM8qH9jYdV-fgIE5eGg&usqp=CAU' },
				{ id: 2, name: 'Dima', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-37GQvmKz3WlZ8WCjhBvpjfCsjmy1L4itfA&usqp=CAU' },
				{ id: 3, name: 'Sandra', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbsMEFO-izKuFoNmwhh3tZuS-2l1quAPJ_Q&usqp=CAU' },
				{ id: 4, name: 'Tony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDpH3994qXDAPD99gt4RBvO9N7lVf8KCgxw&usqp=CAU' },
				{ id: 5, name: 'Sonya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2BodWXtn4vibrb1IVha8p8L3qCJUmfqe3A&usqp=CAU' },
				{ id: 6, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpygmSfVyLNBtm-CH3ejLNQ5k0kh_OtAjmQ&usqp=CAU' },
			],
		}
	},
	_callSubscribe() {
		console.log('change')
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscribe = observer;
	},

	dispatch(action) {

		this._state.profilePage = ProfileReducer(this._state.profilePage, action);
		this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = SidebarReducer(this._state.sidebarPage, action);
		this._callSubscribe(this._state);

	}
}

export default store;