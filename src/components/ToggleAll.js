import { React } from 'react';

const ToggleAll = (context) => {
	const { actions, state: { toggleAll }} = context;

	return (
		<input
			type="checkbox"
			style={ { margin: '20px' } }
			checked={ toggleAll }
			onChange={ () => actions.setToggleAll(!toggleAll) }
		/>

	);
};

export default ToggleAll;
