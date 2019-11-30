import React from 'react';
import { connect } from 'react-redux';
import TodoNavItem from '../components/TodoNavItem';
import { NavState, Navs } from '../modules/navs';
import { tab } from '../modules/navs';

type Props = {
	tab(navItem: Navs):void;
	navItem: Navs;
	nav: Navs;
}

const TodoNavItemContainer: React.SFC<Props> = (
	{ tab, navItem, nav },
) => {
	return (
		<TodoNavItem navItem={navItem} tab={tab}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	nav: state.nav
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
