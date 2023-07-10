import { React, useEffect } from 'react';
import ticker from '../../services/ticker';

const TaskLists = (context) => {
	const { state: { tasks }, actions } = context;

	useEffect(() =>
		// eslint-disable-next-line react-hooks/exhaustive-deps
		ticker(context), []);

	return <div>
		{tasks.map((task, key) =>
			<p key={ key }>
				{task.task}
				<button
					style={ { margin: '3px' } }
					onClick={ () => actions.setRemoveTask(task.id) }
				>X
				</button>
			</p>)}
	</div>;
};

export default TaskLists;
