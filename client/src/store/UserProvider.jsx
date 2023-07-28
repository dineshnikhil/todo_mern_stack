import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import userContext from './userContext';
import sortArray from '../utils/sortArray';

function UserProvider({ children }) {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		logedIn: false,
		userId: -1,
		username: '',
		todos: [],
		loginUser: loginUser,
		logoutUser: logoutUser,
		updateUserTodos: updateUserTodos,
	});

	function loginUser(user, username) {
		var updatedTdos = sortArray(user.todos);
		setUserInfo((prevState) => {
			return {
				...prevState,
				logedIn: true,
				userId: user.userId,
				username: username,
				todos: updatedTdos,
			};
		});
	}

	function logoutUser() {
		setUserInfo({ ...userInfo, logedIn: false });
		navigate('/');
	}

	function updateUserTodos(userId) {
		fetch(`http://localhost:3000/api/v1/todo/user/${userId}`)
			.then((response) => response.json())
			.then((resData) => {
				setUserInfo((prevState) => {
					return { ...prevState, todos: sortArray(resData.todos) };
				});
			});
	}

	return (
		<userContext.Provider value={userInfo}>{children}</userContext.Provider>
	);
}

export default UserProvider;
