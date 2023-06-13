import { React } from 'react';
import ToggleAll from './ToggleAll';

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
		</div>

	);
};

export default Input;
