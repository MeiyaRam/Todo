import { React } from 'react';
import ToggleAll from './ToggleAll';
import AddButton from './AddButton';
import EditButton from './EditButton';
import todoManager from '../../services/todoManager';

const Input = (context) => {
	const { state: { todo, editTodo }, actions } = context;
	const noTodo = todoManager.hasNoTodos(context);

	return (
		<div>
			{noTodo || <ToggleAll { ...context }/>}
			<input
				type="text"
				value={ todo }
				onChange={ (e) => actions.setTodo(e.target.value) }
			/>
			{editTodo
				? <EditButton { ...context }/>
				: <AddButton { ...context }/>}
		</div>
	);
};

export default Input;
