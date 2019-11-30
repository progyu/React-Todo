export type Navs = 'All' | 'Active' | 'Completed';
export type NavState = {
	nav: Navs;
};

export const TAB = 'navs/TAB';

export type NavAction = { type: typeof TAB; navItem: Navs };

export const tab = (navItem: Navs) => ({ type: TAB, navItem });

const initialState: NavState = {
	nav: 'All',
};

export function navsReducer(state = initialState, action: NavAction): NavState {
	switch (action.type) {
		case TAB:
			return {...state, nav: state.nav = action.navItem};

		default:
			return state;
	}
}
