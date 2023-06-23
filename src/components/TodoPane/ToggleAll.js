import { React } from 'react';
import todoProcess from '../../services/todoProcess';

const ToggleAll = (context) => {
	const { actions } = context;

	const toggleAll = todoProcess.hasActiveTodo(context);

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
