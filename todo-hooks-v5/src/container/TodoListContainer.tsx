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

const mapStateToProps = (state: RootState) => ({
	todos: state.todos.todos,
	nav: state.navs.nav,
});

export default connect(
	mapStateToProps,
)(TodoListContainer);
