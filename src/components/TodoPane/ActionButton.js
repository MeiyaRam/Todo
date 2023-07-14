import { React } from 'react';
import EditButton from './EditButton';
import AddButton from './AddButton';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return (
		editTodo
			? <EditButton { ...context }/>
			: <AddButton { ...context }/>);
};

export default ActionButton;
