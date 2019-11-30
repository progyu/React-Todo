export type Todo = {
	id: number;
	content: string;
	completed: boolean;
};

export type TodosState = {
	todos: Todo[];
	input: string;
};

export const CREATE = 'toods/CREATE';
export const TOGGLE = 'todos/TOGGLE';
export const REMOVE = 'todos/REMOVE';
export const TOGGLEALL = 'todos/TOGGLEALL';
export const REMOVEALL = 'todos/REMOVEALL';
export const CHANGEINPUT = 'todos/CHANGEINPUT';

export type Action =
	| { type: typeof CREATE; content: string; todo: Todo }
	| { type: typeof TOGGLE; id: number }
	| { type: typeof REMOVE; id: number }
	| { type: typeof TOGGLEALL; completed: boolean }
	| { type: typeof REMOVEALL; completed: boolean }
	| { type: typeof CHANGEINPUT; input: string };

let id = 4;
export const create = (content: string) => ({
	type: CREATE,
	todo: {
		id: id++,
		content,
		completed: false,
	},
});
export const toggle = (id: number) => ({ type: TOGGLE, id });
export const remove = (id: number) => ({ type: REMOVE, id });
export const toggleAll = (completed: boolean) => ({
	type: TOGGLEALL,
	completed,
});
export const removeAll = () => ({
	type: REMOVEALL,
});
export const changeInput = (input: string) => ({
	type: CHANGEINPUT,
	input,
});

const initialState: TodosState = {
	todos: [
		{
			id: 1,
			content: 'Redux',
			completed: false,
		},
		{
			id: 2,
			content: 'React-Redux',
			completed: false,
		},
		{
			id: 3,
			content: 'TypeScript',
			completed: true,
		},
	],
	input: '',
};

export function todosReducer(state = initialState, action: Action): TodosState {
	switch (action.type) {
		case CREATE:
			return {
				input: '',
				todos: state.todos.concat(action.todo),
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.id
						? { ...todo, completed: !todo.completed }
						: todo,
				),
			};
		case REMOVE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			};
		case TOGGLEALL:
			return {
				...state,
				todos: state.todos.map(todo => ({
					...todo,
					completed: action.completed,
				})),
			};
		case REMOVEALL:
			return {
				...state,
				todos: state.todos.filter(todo => todo.completed !== true),
			};
		case CHANGEINPUT:
			return {
				...state,
				todos: state.todos.filter(todo => todo.completed !== true),
			};

		default:
			return state;
	}
}

// 무슨 차이일까 ??? 바로 todosReducer함수 앞에 바로export 하는 것과 export default
// 다른 컴포넌트에서 import 할 시 전자는 {todosReducer} 후자는 todosReducer
// export default todosReducer;
