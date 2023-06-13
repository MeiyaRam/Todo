import { React } from 'react';
import Input from './Input';
import AddButton from './AddButton';
import Todos from './Todos';

const TodoPane = (context) =>
	<div>
		<Input { ...context }/>
		<AddButton { ...context }/>
		<Todos { ...context }/>
	</div>
	;

export default TodoPane;
