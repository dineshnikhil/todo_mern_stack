import React from 'react';
import { useState } from 'react';
import userContext from './userContext';

function UserProvider({ children }) {
	const [userInfo, setUserInfo] = useState({
		logedIn: false,
		username: '',
		todos: [],
		loginUser: loginUser,
		logoutUser: logoutUser,
	});

	function loginUser() {
		setUserInfo({ ...userInfo, logedIn: true });
	}

	function logoutUser() {
		setUserInfo({ ...userInfo, logedIn: false });
	}

	return (
		<userContext.Provider value={userInfo}>{children}</userContext.Provider>
	);
}

export default UserProvider;
