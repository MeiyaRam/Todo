import { React } from 'react';

const ClearCompleted = (context) => {
	const { actions } = context;

	return (
		<div>
			<button
				onClick={ () => actions.setClearCompleted() }
			>
				Clear Completed
			</button>
		</div>
	);
};

export default ClearCompleted;
