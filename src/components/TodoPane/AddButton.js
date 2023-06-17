import { React } from 'react';
const AddButton = (context) => {
	const { actions } = context;

	return (
		<button
			style={ { margin: '12px' } }
			onClick={ () =>
				actions.setAddTodo() }
		>
			Add
		</button>
	);
};

export default AddButton;
