import { React } from 'react';

const keyActions = {
	Enter: (context) => context.actions.setAddTodo(context.data),
	Escape: (context) => context.actions.setClearInput(context),
};

const Input = (context) => {
	const { state: { todo }, actions } = context;

	return (
		<input
			type="text"
			value={ todo }
			onChange={ (e) => actions.setTodo(e.target.value) }
			onKeyUp={ (e) => keyActions[e.key]
					&& keyActions[e.key]({ ...context, data: e.target.value }) }
		/>
	);
};

export default Input;
