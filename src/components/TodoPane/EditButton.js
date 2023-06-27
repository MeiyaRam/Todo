import { React } from 'react';
const EditButton = (context) => {
	const { actions } = context;

	return (
		<button
			style={ { margin: '12px' } }
			onClick={ () =>
				actions.setUpdateTodo() }
		>
			Edit
		</button>
	);
};

export default EditButton;
