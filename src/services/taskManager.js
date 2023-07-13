import { rndString } from '@laufire/utils/random';
import { faker } from '@faker-js/faker';

const taskManager = {

	getTasks: ({ state: { tasks },
		config: { idLength, taskLimit }}) =>
		(tasks.length !== taskLimit
			? [...tasks,
				{
					id: rndString(idLength),
					task: faker.person.lastName(),
					isCompleted: false,
				}]
			:	[...tasks]),

	removeTask: ({ data, state: { tasks }}) =>
		tasks.filter((task) => task.id !== data),

};

export default taskManager;
