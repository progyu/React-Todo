import React, { useState } from 'react';
import cn from 'classnames';
import './TodoNavItem.scss';
import { NavState } from '../modules/navs';

type NavItemProps = {
	navItem: NavState;
};

const TodoNavItem = ({ navItem, tab, nav }: any) => {
	// const navs = useNavsState();
	// const dispatch = useNavsDispatch();

	// const onChangeNav = (navItem: NavState) => {
	// 	dispatch({
	// 		type: 'TAB',
	// 		navItem,
	// 	});
	// };

	return (
		<li
			id={navItem}
			className={cn({ active: nav === navItem })}
			onClick={() => tab(navItem)}
		>
			{navItem}
		</li>
	);
};

export default React.memo(TodoNavItem);
