import React from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import { Provider } from './contexts/context';

import './App.css';

const App = () => {
	return (
		<TodoTemplate>
			<Provider>
				<TodoInsert />
				<TodoNav />
				<TodoList />
				<TodoFooter />
			</Provider>
		</TodoTemplate>
	);
};

export default App;
