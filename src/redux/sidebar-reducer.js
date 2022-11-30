let initialState = {
	friends: [
		{ id: 1, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu9OerVpHkWSPio5jM8qH9jYdV-fgIE5eGg&usqp=CAU' },
		{ id: 2, name: 'Dima', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-37GQvmKz3WlZ8WCjhBvpjfCsjmy1L4itfA&usqp=CAU' },
		{ id: 3, name: 'Sandra', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbsMEFO-izKuFoNmwhh3tZuS-2l1quAPJ_Q&usqp=CAU' },
		{ id: 4, name: 'Tony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDpH3994qXDAPD99gt4RBvO9N7lVf8KCgxw&usqp=CAU' },
		{ id: 5, name: 'Sonya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2BodWXtn4vibrb1IVha8p8L3qCJUmfqe3A&usqp=CAU' },
		{ id: 6, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpygmSfVyLNBtm-CH3ejLNQ5k0kh_OtAjmQ&usqp=CAU' },
	],
};

const SidebarReducer = (state = initialState, action) => {
	return state;
}

export default SidebarReducer;