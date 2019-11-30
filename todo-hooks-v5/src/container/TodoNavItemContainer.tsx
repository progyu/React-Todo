import React from 'react';
import { connect } from 'react-redux';
import TodoNavItem from '../components/TodoNavItem';
import { Navs } from '../modules/navs';
import { tab } from '../modules/navs';

type Props = {
	tab(navItem: Navs): void;
	navItem: Navs;
	nav: Navs;
}

const TodoNavItemContainer = (
	{ tab, navItem, nav }: Props,
) => {
	return (
		<TodoNavItem navItem={navItem} tab={tab} nav={nav}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	nav: state.navs.nav
});

const mapDispatchToProps = (dispatch: any) => ({
	tab: (navItem: Navs) => {
		dispatch(tab(navItem));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoNavItemContainer);
