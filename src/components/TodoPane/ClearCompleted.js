import { React } from 'react';
import todoManager from '../../services/todoManager';

const ClearCompleted = (context) => {
	const { actions } = context;

	return (
		<div>
			<button
				onClick={ () => actions.setClearCompleted(context) }
				disabled={ todoManager.hasCompleted(context) }
			>
				Clear Completed
			</button>
		</div>
	);
};

export default ClearCompleted;
