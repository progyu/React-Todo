import React from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { Todo } from '../modules/todos';
import { Navs } from '../modules/navs';

type Props = {
	todos: Todo[];
	nav: Navs;
};

const TodoListContainer = ({ todos, nav }: Props) => {
	return <TodoList todos={todos} nav={nav} />;
};

const mapStateToProps = (state: any) => ({
	todos: state.todos.todos,
	nav: state.navs.nav,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoListContainer);
