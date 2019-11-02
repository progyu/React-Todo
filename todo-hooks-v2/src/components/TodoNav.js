import React, { memo } from 'react';
import './TodoNav.css';

const TodoNav = memo(( { navState, navId, navValue } ) => {

  return (
      <li id={navId} className={navState === navId ? 'active' : null}>{navValue}</li>
  );
});

export default TodoNav;