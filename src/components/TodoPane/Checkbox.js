import { React } from 'react';

const Checkbox = (context) => {
	const { actions, data } = context;
	const { isCompleted } = data;

	return (
		<input
			type="Checkbox"
			checked={ isCompleted }
			onChange={ () => actions.setToggle(data) }
		/>
	);
};

export default Checkbox;
