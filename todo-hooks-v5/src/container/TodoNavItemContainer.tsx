import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

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

const mapStateToProps = (state: RootState) => ({
	nav: state.navs.nav,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	tab: (navItem: Navs) => {
		dispatch(tab(navItem));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoNavItemContainer);
