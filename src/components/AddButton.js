import { React } from 'react';
const AddButton = (context) => {
	const { actions, state } = context;

	return (
		<div>
			<button onClick={ () =>
				actions.addTodo(state) }
			>
				Add
			</button>
		</div>
	);
};

export default AddButton;
