import React, { Component } from 'react';
import './TodoToggle.css';

class TodoToggle extends Component {
	render() {
		const props = this.props;

		return (
			<input
				id={props.id}
				className="custom-checkbox"
				type="checkbox"
				onChange={props.onChange}
				checked={props.checked}
			/>
		);
	}
}

export default TodoToggle;
