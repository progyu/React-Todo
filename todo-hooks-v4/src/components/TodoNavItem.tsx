import React, { useState } from 'react';
import { useNavsState, useNavsDispatch, NavState } from '../contexts/context';
import cn from 'classnames';
import './TodoNavItem.scss';

type NavItemProps = {
	navItem: NavState;
};

const TodoNavItem = ({ navItem }: NavItemProps) => {
	const navs = useNavsState();
	const dispatch = useNavsDispatch();

	const onChangeNav = (navItem: NavState) => {
		dispatch({
			type: 'TAB',
			navItem,
		});
	};

	return (
		<li
			id={navItem}
			className={cn({ active: navs === navItem })}
			onClick={() => onChangeNav(navItem)}
		>
			{navItem}
		</li>
	);
};

export default React.memo(TodoNavItem);
