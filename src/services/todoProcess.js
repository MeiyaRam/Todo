import { rndString } from '@laufire/utils/random';

const idLength = 3;

const getToDo = (context) => {
	const { state: { todo, todos }} = context;

	return [...todos, { id: rndString(idLength), todo: todo }];
};

const todoProcess = { getToDo };

export default todoProcess;
