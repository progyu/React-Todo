export type Navs = 'All' | 'Active' | 'Completed';
export type NavState = {
	nav: Navs
}

type NavAction = { type: 'TAB'; navItem: Navs };

const TAB = 'navs/TAB';

export const tab = (navItem: Navs) => ({ type: TAB, navItem });

const initialState: NavState = {
	nav: 'All'
}

export function navsReducer(
	state = initialState,
	action: NavAction,
): Navs {
	switch (action.type) {
		case 'TAB':
			return (state.nav = action.navItem);

		default:
			throw new Error('Unhandled action');
	}
}
