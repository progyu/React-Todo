import React from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import { TodosContextProvider, NavsContextProvider } from './contexts/context';

import './App.css';

const App = () => {
	return (
		<TodoTemplate>
			<TodosContextProvider>
				<TodoInsert />
				<NavsContextProvider>
					<TodoNav />
					<TodoList />
				</NavsContextProvider>
				<TodoFooter />
			</TodosContextProvider>
		</TodoTemplate>
	);
};

export default App;
