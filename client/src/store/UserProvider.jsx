import React from 'react';
import { useState } from 'react';
import userContext from './userContext';

function UserProvider({ children }) {
	const [userInfo, setUserInfo] = useState({
		logedIn: false,
		username: '',
		todos: [],
		loginUser: loginUser,
	});

	function loginUser() {
		setUserInfo({ ...userInfo, logedIn: true });
	}

	console.log(userInfo);

	// const UserContext = {
	// 	logedIn: state.logedIn,
	// 	username: state.username,
	// 	todos: state.todos,
	// 	something: 'new',
	// 	loginUser: logHandler,
	// };

	return (
		<userContext.Provider value={userInfo}>{children}</userContext.Provider>
	);
}

export default UserProvider;
