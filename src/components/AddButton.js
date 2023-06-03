import { React } from 'react';
const AddButton = (context) => {
	const { actions } = context;

	return (
		<div>
			<button onClick={ () =>
				actions.setAddTodo() }
			>
				Add
			</button>
		</div>
	);
};

export default AddButton;
