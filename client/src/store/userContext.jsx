import React from 'react';

const userContext = React.createContext({
	logedIn: false,
	username: '',
	todos: [],
	loginUser: () => {},
	logoutUser: () => {},
	updateUserTodos: () => {},
});

export default userContext;
