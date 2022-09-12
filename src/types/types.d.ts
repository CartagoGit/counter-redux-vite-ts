export type ICounter = IIncremented | IDecremented | IReset;

interface IIncremented {
	type: "@counter/incremented";
}

interface IDecremented {
	type: "@counter/decremented";
}

interface IReset {
	type: "@counter/reset";
}
