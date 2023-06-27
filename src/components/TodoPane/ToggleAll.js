import { React } from 'react';
import todoManager from '../../services/todoManager';

const ToggleAll = (context) => {
	const { actions } = context;

	const toggleAll = todoManager.hasActiveTodo(context);

	return (
		<input
			type="checkbox"
			style={ { margin: '20px' } }
			checked={ toggleAll }
			onChange={ () => actions.setToggleAll(!toggleAll) }
		/>

	);
};

export default ToggleAll;
