import { React } from 'react';
import FilterButtons from './FilterButtons';

const FilterBar = (context) => {
	const { config: { filterButtons }} = context;

	return (
		<table style={ { marginLeft: '45%', align: 'center' } }>
			<tbody>
				<tr>
					{filterButtons.map((button, key) =>
						<FilterButtons
							key={ key }
							{ ...{ ...context, data: button } }
						/>)}
				</tr>
			</tbody>
		</table>);
};

export default FilterBar;
