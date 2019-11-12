import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
	render() {
		const { todos, navState, onToggle, onRemove } = this.props;

		return (
			<ul className="todos">
				{todos
					.filter(todo => {
						if (navState === 'Active') return !todo.completed;
						if (navState === 'Completed') return todo.completed;
						return true;
					})
					.map(todo => (
						<TodoListItem
							key={todo.id}
							todo={todo}
							onToggle={onToggle}
							onRemove={onRemove}
						/>
					))}
			</ul>
		);
	}
}

export default TodoList;
