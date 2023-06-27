import { React } from 'react';
import ToggleAll from './ToggleAll';
import AddButton from './AddButton';
import EditButton from './EditButton';
import todoProcess from '../../services/todoProcess';

const Input = (context) => {
	const { state: { todo, editTodo }, actions } = context;
	const noTodo = todoProcess.hasNoTodos(context);

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
