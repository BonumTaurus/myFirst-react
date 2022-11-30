
import Profile from './Profile';
import { viewPostActionCreate, onPostChangeActionCreate } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';

// const ProfileContainer = (props) => {

// 	let state = props.store.getState();

// 	let postsUsers = state.profilePage.users.map(user => <Post message={user.message} like={user.like} name={user.name} ava={user.ava} />)

// 	let viewPost = () => {
// 		let action = viewPostActionCreate();
// 		props.dispatch(action);
// 	}

// 	let PostChange = (text) => {
// 		let action = onPostChangeActionCreate(text);
// 		props.dispatch(action);
// 	}

// 	return (
// 		<Profile postsUsers={postsUsers} onPostChange={PostChange} viewPost={viewPost} newPostText={state.profilePage.newPostText} />
// 	)
// }


const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		viewPost: () => {
			dispatch(viewPostActionCreate());
		},
		onPostChange: (text) => {
			dispatch(onPostChangeActionCreate(text));
		}
	}
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;

