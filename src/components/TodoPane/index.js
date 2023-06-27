import { React } from 'react';
import Input from './Input';
import Todos from './Todos';
import FilterBar from './FilterBar';
import ClearCompleted from './ClearCompleted';

const TodoPane = (context) => <div>
	<Input { ...context }/>
	<FilterBar { ...context }/>
	<Todos { ...context }/>
	<ClearCompleted { ...context }/>
</div>;

export default TodoPane;
