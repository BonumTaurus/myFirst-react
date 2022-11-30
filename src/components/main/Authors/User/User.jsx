import React from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import './User.css';

const User = (props) => {

	return (
		<li className='li-box'>
			<div className='li-box__item'>
				<img src={`${props.ava}`}></img>
				<NavLink to={`/${props.id}`}>{props.name}</NavLink>
			</div>
		</li>
	)
}

export default User;