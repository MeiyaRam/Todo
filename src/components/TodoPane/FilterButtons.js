import { React } from 'react';

const FilterButtons = (context) => {
	const { actions, data } = context;

	return (
		<td>
			<button
				value={ data }
				onClick={ (e) =>
					actions.setFilter(e.target.value) }
			>
				{data}
			</button>
		</td>
	);
};

export default FilterButtons;
