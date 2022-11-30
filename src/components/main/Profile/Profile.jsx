import React from 'react';
import './Profile.css';
import Post from './Post/Post';

const Profile = (props) => {

	let postsUsers = props.profilePage.users.map(user => <Post message={user.message} like={user.like} name={user.name} ava={user.ava} />)

	let textareaElement = React.createRef();

	let viewPost = () => {
		props.viewPost();
	}

	let onPostChange = () => {
		let text = textareaElement.current.value;
		props.onPostChange(text);
	}

	return (
		<div className='main__profile profile'>
			<div className='profile__fon'>
				<img src='https://abrakadabra.fun/uploads/posts/2022-02/1645612342_1-abrakadabra-fun-p-fonovie-oboi-dlya-telefona-1.jpg'></img>
			</div>
			<div className='profile__ava'>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYjW_Na2Dfdhti8OK9vcOZ5PX0F730rDq_A&usqp=CAU'></img>
				<div className='profile__description'>
					<div className='profile__name'>Olesya Ohrimenko</div>
					<button className='profile__button'>full information</button>
				</div>
			</div>
			<div className='profile__myPost'>
				<textarea className='profile__textarea' onChange={onPostChange} ref={textareaElement} value={props.newPostText}></textarea>
				<button className='profile__addPost' onClick={viewPost}>add post</button>
			</div>
			{postsUsers}
		</div>
	)
}

export default Profile;
