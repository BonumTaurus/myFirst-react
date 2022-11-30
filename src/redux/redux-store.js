import { legacy_createStore, combineReducers } from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import SidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
	profilePage: ProfileReducer,
	dialogsPage: DialogsReducer,
	sidebarPage: SidebarReducer
});

let store = legacy_createStore(reducers);

export default store;