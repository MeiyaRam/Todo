import { React, useEffect } from 'react';
import ticker from '../../services/ticker';

const TaskLists = (context) => {
	const { state: { tasks }, actions } = context;

	useEffect(() =>
		// eslint-disable-next-line react-hooks/exhaustive-deps
		ticker(context), []);

	return <div>
		{tasks.map(({ task, id }, key) =>
			<p key={ key }>
				<button
					className="taskButton"
					onClick={ () => actions.setToTaskTodo(task) }
				>+</button>
				{task}
				<button
					className="taskButton"
					onClick={ () => actions.setRemoveTask(id) }
				>X
				</button>
			</p>)}
	</div>;
};

export default TaskLists;
