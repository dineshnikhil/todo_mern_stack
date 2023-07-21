import React from 'react';
import { useReducer } from 'react';
import userContext from './userContext';

const defaultUserContex = {
	logedIn: false,
	username: 'dinesh',
	todos: [],
	loginUser: () => {},
};

const userReducer = (state, action) => {
	if (action.type === 'login') {
		console.log(state);
	}
};

function UserProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, { count: 1213 });

	function logHandler() {
		dispatch({ type: 'login' });
	}

	// console.log(state);

	// const UserContext = {
	// 	logedIn: state.logedIn,
	// 	username: state.username,
	// 	todos: state.todos,
	// 	loginUser: logHandler,
	// };

	const obj = {
		countfromObj: state.count,
		loginUser: logHandler,
	};

	return <userContext.Provider value={obj}>{children}</userContext.Provider>;
}

export default UserProvider;
