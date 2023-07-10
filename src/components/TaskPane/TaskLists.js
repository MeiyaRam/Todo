import { React, useEffect } from 'react';
import ticker from '../../services/ticker';

const TaskLists = (context) => {
	const { state: { tasks }} = context;

	useEffect(() =>
		// eslint-disable-next-line react-hooks/exhaustive-deps
		ticker(context), []);

	return <div>
		{tasks.map((task, key) =>
			<p key={ key }>{task.task}</p>)}
	</div>;
};

export default TaskLists;
