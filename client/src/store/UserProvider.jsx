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
		console.log(state.logedIn);
	}
};

function UserProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, defaultUserContex);

	function logHandler() {
		dispatch({ type: 'login' });
	}

	const UserContext = {
		logedIn: state.logedIn,
		username: state.username,
		todos: state.todos,
		loginUser: logHandler,
	};

	return (
		<userContext.Provider value={defaultUserContex}>
			{children}
		</userContext.Provider>
	);
}

export default UserProvider;
