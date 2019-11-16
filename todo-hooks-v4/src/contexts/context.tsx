import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export type Todo = {
	id: number;
	content: string;
	completed: boolean;
};

export type NavState = 'All' | 'Active' | 'Completed';

type TodosState = Todo[];

// 상태전용 Context
const TodosStateContext = createContext<TodosState | undefined>(undefined);
const NavStateContext = createContext<NavState | undefined>(undefined);

// action type 선언
type Action =
	| { type: 'CREATE'; content: string }
	| { type: 'TOGGLE'; id: number }
	| { type: 'REMOVE'; id: number }
	| { type: 'TOGGLEALL'; completed: boolean }
	| { type: 'REMOVEALL'; completed: boolean };

type NavAction = { type: 'TAB'; navItem: NavState };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
	undefined,
);

type NavsDispatch = Dispatch<NavAction>;
const NavsDispatchContext = createContext<NavsDispatch | undefined>(undefined);

// Reducer
function todosReducer(state: TodosState, action: Action): TodosState {
	switch (action.type) {
		case 'CREATE':
			const nextId = Math.max(...state.map(todo => todo.id)) + 1;
			return state.concat({
				id: nextId,
				content: action.content,
				completed: false,
			});
		case 'TOGGLE':
			return state.map(todo =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
			);
		case 'REMOVE':
			return state.filter(todo => todo.id !== action.id);
		case 'TOGGLEALL':
			return state.map(todo => ({ ...todo, completed: action.completed }));
		case 'REMOVEALL':
			return state.filter(todo => todo.completed !== true);

		default:
			throw new Error('Unhandled action');
	}
}

function navsReducer(state: NavState, action: NavAction): NavState {
	switch (action.type) {
		case 'TAB':
			return (state = action.navItem);

		default:
			throw new Error('Unhandled action');
	}
}

// Provider 작성
export function TodosContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [todos, dispatch] = useReducer(todosReducer, [
		{
			id: 1,
			content: 'Context',
			completed: true,
		},
		{
			id: 2,
			content: 'TypeScript',
			completed: true,
		},
		{
			id: 3,
			content: 'API',
			completed: false,
		},
	]);

	return (
		<TodosDispatchContext.Provider value={dispatch}>
			<TodosStateContext.Provider value={todos}>
				{children}
			</TodosStateContext.Provider>
		</TodosDispatchContext.Provider>
	);
}

export function NavsContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [navs, dispatch] = useReducer(navsReducer, 'All');

	return (
		<NavsDispatchContext.Provider value={dispatch}>
			<NavStateContext.Provider value={navs}>
				{children}
			</NavStateContext.Provider>
		</NavsDispatchContext.Provider>
	);
}

// 커스텀 Hooks
export function useTodosState() {
	const state = useContext(TodosStateContext);
	if (!state) throw new Error('TodosProvider not found');
	return state;
}

export function useTodosDispatch() {
	const dispatch = useContext(TodosDispatchContext);
	if (!dispatch) throw new Error('TodosProvider not found');
	return dispatch;
}

export function useNavsState() {
	const state = useContext(NavStateContext);
	if (!state) throw new Error('NavsProvider not found');
	return state;
}

export function useNavsDispatch() {
	const dispatch = useContext(NavsDispatchContext);
	if (!dispatch) throw new Error('NavsProvider not found');
	return dispatch;
}
