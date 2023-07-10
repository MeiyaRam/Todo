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
};

export default taskManager;
