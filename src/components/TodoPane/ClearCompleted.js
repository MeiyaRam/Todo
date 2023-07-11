import { React } from 'react';
import todoManager from '../../services/todoManager';

const ClearCompleted = (context) => {
	const { actions } = context;
	const hasCompleted = todoManager.hasCompleted(context);

	return (
		hasCompleted
		|| <div>
			<button
				onClick={ () => actions.setClearCompleted(context) }
			>
				Clear Completed
			</button>
		</div>
	);
};

export default ClearCompleted;
