import { React } from 'react';
import './App.scss';
import Input from './components/Input';
import AddButton from './components/AddButton';
import Todos from './components/Todos';
import FilterBar from './components/FilterBar';

const App = (context) =>
	<div className="App">
		ToDo App
		<Input { ...context }/>
		<AddButton { ...context }/>
		<Todos { ...context }/>
		<FilterBar { ...context }/>
	</div>;

export default App;
