import { React } from 'react';

const CheckBox = (context) => {
	const { actions, data } = context;
	const { isCompleted } = data;

	return (
		<input
			type="checkBox"
			checked={ isCompleted }
			onChange={ () => actions.setToggle(data) }
		/>
	);
};

export default CheckBox;
