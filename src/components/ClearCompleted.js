import { React } from 'react';
import todoProcess from '../services/todoProcess';

const ClearCompleted = (context) => {
	const { actions } = context;
	const hasComplete = todoProcess.hasCompleted(context);

	return (
		<div>
			<button
				onClick={ () => actions.setClearCompleted(context) }
				disabled={ hasComplete }
			>
				Clear Completed
			</button>
		</div>
	);
};

export default ClearCompleted;
