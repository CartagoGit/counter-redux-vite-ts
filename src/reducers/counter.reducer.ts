import { ICounter } from "../types/types";

export const counterReducer = (state: number = 0, action: ICounter) => {
	switch (action.type) {
		case "@counter/incremented":
			return state + 1;
		case "@counter/incremented":
			return state - 1;
		case "@counter/reset":
			return 0;
		default:
			return state;
	}
};
