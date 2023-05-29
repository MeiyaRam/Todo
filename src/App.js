import { React } from 'react';
import './App.scss';
import Input from './components/Input';
import AddButton from './components/AddButton';
import Todo from './components/Todo';

const App = (context) =>
	<div className="App">
		ToDo App
		<Input { ...context }/>
		<AddButton { ...context }/>
		<Todo { ...context }/>
	</div>;

export default App;
