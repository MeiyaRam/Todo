import React from 'react';
import RandomString from './RandomString';

const TaskPane = (context) =>
	<div>
		<RandomString { ...context }/>
	</div>;

export default TaskPane;
