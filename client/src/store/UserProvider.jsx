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
	});

	function loginUser(user) {
		setUserInfo({
			...userInfo,
			logedIn: true,
			userId: user.userId,
			username: 'dinesh',
			todos: user.todos,
		});
	}

	function logoutUser() {
		setUserInfo({ ...userInfo, logedIn: false });
	}

	return (
		<userContext.Provider value={userInfo}>{children}</userContext.Provider>
	);
}

export default UserProvider;
