import { combineReducers } from 'redux';
import { TodosState, todosReducer as todos} from './todos';
import { NavState, navsReducer as navs } from './navs';

export type StoreState = {
	todos: TodosState;
}

// export type NavStoreState = {
// 	navs: NavState;
// }

// const rootReducer = combineReducers<StoreState>({
// 	todos,
// 	// navs,
// });
const rootReducer = combineReducers<StoreState>({
	todos,
});

export default rootReducer;
