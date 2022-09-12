import { ICounter } from "../types/types";

const actionIncremented: ICounter = {
	type: "@counter/incremented",
};
const actionDecremented: ICounter = {
	type: "@counter/decremented",
};
const actionReset: ICounter = {
	type: "@counter/reset",
};

export { actionIncremented, actionDecremented, actionReset };
