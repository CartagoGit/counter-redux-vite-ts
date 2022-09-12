import { createStore } from "redux";
import { actionIncremented } from "../actions/counter.actions";
import { counterReducer } from "../reducers/counter.reducer";

export const store = createStore(counterReducer);

store.dispatch(actionIncremented);

store.subscribe(() => {
	console.log(store.getState());
});
