import React, { Component } from 'react';
import './TodoNav.css';

class TodoNav extends Component {
  
  render() {
    const { navState, navId, navValue } = this.props;

    return (
        <li id={navId} className={navState === navId ? 'active' : null}>{navValue}</li>
    );
  }
}

export default TodoNav;