import React from 'react';
import { connect } from 'react-redux';

import TodoNavItem from '../components/TodoNavItem';
import { RootState } from '../modules';
import { Navs, tab } from '../modules/navs';

type Props = {
	tab(navItem: Navs): void;
	navItem: Navs;
	nav: Navs;
};

const TodoNavItemContainer = ({ tab, navItem, nav }: Props) => {
	return <TodoNavItem navItem={navItem} tab={tab} nav={nav} />;
};

export default connect(
	({ navs }: RootState) => ({
		nav: navs.nav,
	}),
	{
		tab,
	},
)(TodoNavItemContainer);
