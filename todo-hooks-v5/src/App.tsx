import React from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsertContainer from './container/TodoInsertContainer';
import TodoNav from './components/TodoNav';
import TodoListContainer from './container/TodoListContainer';
import TodoFooterContainer from './container/TodoFooterContainer';

import './App.css';

const App = () => {
	return (
		<TodoTemplate>
				<TodoInsertContainer />
					<TodoNav />
					<TodoListContainer />
				<TodoFooterContainer />
		</TodoTemplate>
	);
};

export default App;
