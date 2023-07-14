import React from 'react';
import TaskLists from './TaskLists';

const TaskPane = (context) =>
	<div>
		<h1>TaskPane</h1>
		<TaskLists { ...context }/>
	</div>;

export default TaskPane;
