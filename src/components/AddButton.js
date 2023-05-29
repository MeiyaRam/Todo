import { React } from 'react';
const AddButton = (context) => {
	const { actions } = context;

	return (
		<div>
			<button onClick={ () =>
				actions.addTodo() }
			>
				Add
			</button>
		</div>
	);
};

export default AddButton;
