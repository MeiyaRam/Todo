import { React } from 'react';
import './App.scss';
import TodoPane from './components/TodoPane';
import TaskPane from './components/TaskPane';

const App = (context) =>
	<div className="App">
		<div style={ { float: 'left', width: '50%', height: '100%' } }>
			ToDo App
			<TodoPane { ...context }/>
		</div>
		<div style={ { width: '50%', float: 'right' } }>
			TaskPane
			<TaskPane { ...context }/>
		</div>
	</div>;

export default App;
