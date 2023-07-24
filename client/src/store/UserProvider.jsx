import React from 'react';
import { useState } from 'react';
import userContext from './userContext';

function UserProvider({ children }) {
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
		setUserInfo((prevState) => {
			return {
				...prevState,
				logedIn: true,
				userId: user.userId,
				username: username,
				todos: user.todos,
			};
		});
	}

	function logoutUser() {
		setUserInfo({ ...userInfo, logedIn: false });
	}

	function updateUserTodos(userId) {
		fetch(`http://localhost:3000/api/v1/todo/user/${userId}`)
			.then((response) => response.json())
			.then((resData) => {
				setUserInfo((prevState) => {
					return { ...prevState, todos: resData.todos };
				});
			});
	}

	return (
		<userContext.Provider value={userInfo}>{children}</userContext.Provider>
	);
}

export default UserProvider;
