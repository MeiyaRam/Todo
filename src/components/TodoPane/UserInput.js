import { React } from 'react';
import ToggleAll from './ToggleAll';
import Input from './Input';
import ActionButton from './ActionButton';

const UserInput = (context) =>
	<div>
		<ToggleAll { ...context }/>
		<Input { ...context }/>
		<ActionButton { ...context }/>
	</div>;

export default UserInput;
