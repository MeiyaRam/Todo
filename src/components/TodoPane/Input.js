import { React } from 'react';
import ToggleAll from './ToggleAll';
import AddButton from './AddButton';
import EditButton from './EditButton';

const keyActions = {
	Enter: (context, data) => context.actions.setAddTodo(data.target.value),
	Escape: (context) => context.actions.setClearInput(context),
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
				onKeyUp={ (e) => keyActions[e.key]
					&& keyActions[e.key](context, e) }
			/>
			{editTodo
				? <EditButton { ...context }/>
				: <AddButton { ...context }/>}
		</div>
	);
};

export default Input;
