import { React } from 'react';
import ToggleAll from './ToggleAll';
import AddButton from './AddButton';

const Input = (context) => {
	const { state: { todo }, actions } = context;

	return (
		<div>
			<ToggleAll { ...context }/>
			<input
				type="text"
				value={ todo }
				onChange={ (e) => actions.setTodo(e.target.value) }
			/>
			<AddButton { ...context }/>
		</div>
	);
};

export default Input;
