import { rndString } from '@laufire/utils/random';

const taskManager = {
	getTasks: ({ state: { tasks }, config: { idLength, taskLength }}) =>
		[...tasks,
			{
				id: rndString(idLength),
				task: rndString(taskLength),
				isCompleted: false,
			}],
};

export default taskManager;
