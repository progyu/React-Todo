import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { Todo } from '../modules/todos';
import { Navs } from '../modules/navs';

type Props = {
	todos: Todo[];
	nav: Navs;
};

const TodoListContainer = ({ todos, nav }: Props) => {
	return <TodoList todos={todos} nav={nav} />;
};

export default connect(({ todos, navs }: RootState) => ({
	todos: todos.todos,
	nav: navs.nav,
}))(TodoListContainer);
