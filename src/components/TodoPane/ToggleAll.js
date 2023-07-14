import { React } from 'react';
import todoManager from '../../services/todoManager';

const Checkbox = (context) => {
	const { actions } = context;
	const toggleAll = todoManager.hasActiveTodo(context);

	return (
		<input
			type="checkbox"
			style={ { margin: '20px' } }
			checked={ toggleAll }
			onChange={ () => actions.setToggleAll(!toggleAll) }
		/>);
};

const ToggleAll = (context) => {
	const noTodo = todoManager.hasNoTodos(context);

	return (
		noTodo || <Checkbox { ...context }/>
	);
};

export default ToggleAll;
