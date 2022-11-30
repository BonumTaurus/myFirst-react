const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	users: [
		{ like: 3, name: 'Andry', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDATwYwwNGQUhEBH7V8QlkfxJbSVkOjx_Jtg&usqp=CAU' },
		{ like: 17, name: 'Viola', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU' },
		{ like: 10, name: 'Sasha', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoi6Z0xOdcuffZzWjB-I6DwyPs-y834ZUCw&usqp=CAU' },
		{ like: 34, name: 'Anton', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtsz7BUlaNJEAa3OuDWaR6ny2XQWUhrYpLQ&usqp=CAU' }
	],
	newPostText: ''
};

const ProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newUser = {
				like: 0,
				name: 'Olesya Ohrimenko',
				ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYjW_Na2Dfdhti8OK9vcOZ5PX0F730rDq_A&usqp=CAU',
				message: state.newPostText
			};
			let stateCopy = { ...state };
			stateCopy.users = [...state.users];
			stateCopy.users.push(newUser);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT:
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		default:
			return state;
	}
};

export const viewPostActionCreate = () => ({ type: ADD_POST });
export const onPostChangeActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default ProfileReducer;