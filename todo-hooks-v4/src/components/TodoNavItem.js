import React, { useContext } from 'react';
import { Context } from '../contexts/context';
import cn from 'classnames';
import './TodoNavItem.scss';

const TodoNavItem = ({ navItem }) => {
	const { state, actions } = useContext(Context);

	return (
		<li
			id={navItem}
			className={cn({ active: state.navState === navItem })}
			onClick={() => actions.setNavState(navItem)}
		>
			{navItem}
		</li>
	);
};

export default React.memo(TodoNavItem);
