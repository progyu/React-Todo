import React, { memo } from 'react';
import './TodoNav.css';

const TodoNav = memo(( { navState, navs, setNavState } ) => {

  const onClickNav = (e) => {
    setNavState(e.target.id);
  };

  return (
    <ul className="nav" onClick={onClickNav}>
      {navs.map(nav => 
        <li key={nav.id} id={nav.id} className={navState === nav.id ? 'active' : null}>{nav.value}</li>
      )}
    </ul>
  );
});

export default TodoNav;