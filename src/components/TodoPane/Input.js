import { React } from 'react';
import ToggleAll from './ToggleAll';
import AddButton from './AddButton';
import EditButton from './EditButton';

const getEnterKeyAction = (context) => {
	const { data, config: { keyCode }, actions } = context;

	(data.keyCode === keyCode)
	&& actions.setAddTodo(data.target.value);
};

const Input = (context) => {
	const { state: { todo, editTodo }, actions } = context;

	return (
		<div>
			<ToggleAll { ...context }/>
			<input
				type="text"
				value={ todo }
				onChange={ (e) => actions.setTodo(e.target.value) }
				onKeyUp={ (e) => getEnterKeyAction({ ...context, data: e }) }
			/>
			{editTodo
				? <EditButton { ...context }/>
				: <AddButton { ...context }/>}
		</div>
	);
};

export default Input;
