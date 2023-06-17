import { React } from 'react';
import Input from './Input';
import Todos from './Todos';
import FilterBar from './FilterBar';
import todoProcess from '../../services/todoProcess';
import ClearCompleted from './ClearCompleted';

const TodoPane = (context) => {
	const noTodo = todoProcess.hasNoTodos(context);

	return <div>
		<Input { ...context }/>
		{noTodo || <FilterBar { ...context }/>}
		<Todos { ...context }/>
		<ClearCompleted { ...context }/>
	</div>;
};

export default TodoPane;
