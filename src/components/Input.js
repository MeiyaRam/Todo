import { React } from 'react';

const Input = (context) => {
	const { state: { todo }, actions } = context;

	return (
		<div>
			<input
				type="text"
				value={ todo }
				onChange={ (e) => actions.updateTodo(e.target.value) }
			/>
		</div>

	);
};

export default Input;
