import { rndString } from '@laufire/utils/random';

const taskManager = {
	getTasks: ({ state: { tasks },
		config: { idLength, taskLength, taskLimit }}) =>
		(tasks.length !== taskLimit
			? [...tasks,
				{
					id: rndString(idLength),
					task: rndString(taskLength),
					isCompleted: false,
				}]
			:	[...tasks]),

	removeTask: ({ data, state: { tasks }}) =>
		tasks.filter((task) => task.id !== data),
};

export default taskManager;
