import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
  render() {
    const { onSubmitForm, onChangeInput, value } = this.props;

    return (
      <form onSubmit={onSubmitForm}>
        <input className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
      </form>
    )
  }
}

export default TodoInput;