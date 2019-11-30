import React from 'react';
import cn from 'classnames';
import './TodoNavItem.scss';
import { Navs } from '../modules/navs';

type Props = {
	tab(navItem: Navs): void;
	navItem: Navs;
	nav: Navs;
};

const TodoNavItem = ({ navItem, tab, nav }: Props) => {
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
