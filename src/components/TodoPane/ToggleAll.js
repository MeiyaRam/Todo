import { React } from 'react';
import todoManager from '../../services/todoManager';

const ToggleAll = (context) => {
	const { actions } = context;
	const toggleAll = todoManager.hasActiveTodo(context);
	const noTodo = todoManager.hasNoTodos(context);

	return (
		noTodo ||		<input
			type="checkbox"
			style={ { margin: '20px' } }
			checked={ toggleAll }
			onChange={ () => actions.setToggleAll(!toggleAll) }
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		           />
	);
};

export default ToggleAll;
