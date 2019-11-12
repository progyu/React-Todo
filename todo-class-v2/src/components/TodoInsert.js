import React, { Component } from 'react';
import './TodoInsert.css';

class TodoInsert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};

		this.onInsert = props.onInsert;
	}

	onChangeInput = e => {
		this.setState({ value: e.target.value });
	};

	onSubmitForm = e => {
		const { value } = this.state;
		e.preventDefault();
		if (!value.trim()) return;
		this.onInsert(value);
		this.setState({ value: '' });
	};
	render() {
		const { onSubmitForm, onChangeInput } = this;
		const { value } = this.state;

		return (
			<form onSubmit={onSubmitForm}>
				<input
					className="input-todo"
					placeholder="What needs to be done?"
					value={value}
					onChange={onChangeInput}
					autoFocus
				/>
			</form>
		);
	}
}

export default TodoInsert;
