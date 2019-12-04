import { combineReducers } from 'redux';
import { todosReducer as todos } from './todos';
import { navsReducer as navs } from './navs';

const rootReducer = combineReducers({
	todos: todos,
	navs: navs,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
