import React from 'react';
import TaskLists from './TaskLists';

const TaskPane = (context) =>
	<div>
		TaskPane
		<TaskLists { ...context }/>
	</div>;

export default TaskPane;
