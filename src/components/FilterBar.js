import { React } from 'react';

const FilterBar = (context) => {
	const { actions, config: { filterButtons }} = context;

	return (
		<table style={ { marginLeft: '47%', align: 'center' } }>
			<tbody>
				<tr>
					{filterButtons.map((button, key) =>
						<td key={ key }>
							<button
								value={ button }
								onClick={ (e) =>
									actions.setFilter(e.target.value) }
							>
								{button}
							</button>
						</td>)}
				</tr>
			</tbody>
		</table>);
};

export default FilterBar;
