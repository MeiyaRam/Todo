import { React } from 'react';
import Input from './Input';
import AddButton from './AddButton';
import Todos from './Todos';
import FilterBar from './FilterBar';
import todoProcess from '../../services/todoProcess';

const TodoPane = (context) => {
	const noTodo = todoProcess.hasNoTodos(context);

	return <div>
		<Input { ...context }/>
		<AddButton { ...context }/>
		<Todos { ...context }/>
		{noTodo || <FilterBar { ...context }/>}
	</div>;
};

export default TodoPane;
