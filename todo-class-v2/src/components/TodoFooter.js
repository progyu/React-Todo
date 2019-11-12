import React, { Component } from 'react';
import TodoToggle from './TodoToggle';
import './TodoFooter.css';

class TodoFooter extends Component {
	render() {
		const { todos, onClear, onToggleAll } = this.props;

		return (
			<div className="footer">
				<div className="complete-all">
					<TodoToggle
						id="ck-complete-all"
						onChange={e => onToggleAll(e.target.checked)}
					/>
					<label htmlFor="ck-complete-all">Mark all as complete</label>
				</div>
				<div className="clear-completed">
					<button className="btn" onClick={onClear}>
						Clear completed (
						<span className="completed-todos">
							{todos.filter(todo => todo.completed === true).length}
						</span>
						)
					</button>
					<strong className="active-todos">
						{todos.filter(todo => todo.completed !== true).length}
					</strong>{' '}
					items left
				</div>
			</div>
		);
	}
}

export default TodoFooter;
