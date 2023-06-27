import { React } from 'react';
import todoManager from '../../services/todoManager';

const ClearCompleted = (context) => {
	const { actions } = context;
	const hasComplete = todoManager.hasCompleted(context);

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
