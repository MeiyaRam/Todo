import { React } from 'react';
import Todos from './Todos';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';
import UserInput from './UserInput';

const TodoPane = (context) => <div>
	<h1>ToDo App</h1>
	<UserInput { ...context }/>
	<FilterBar { ...context }/>
	<Todos { ...context }/>
	<ClearCompleted { ...context }/>
</div>;

export default TodoPane;
