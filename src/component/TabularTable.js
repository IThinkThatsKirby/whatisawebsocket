import React from 'react';
// make this a .map you dummy.
// write a check for a new name.
// use state to only update the required data when its updated and not the whole page.
// maybe a react app is over kill for this simple table display.
function TabularTable(data) {
	return (
		<table className='border large-space'>
			<thead>
				<tr>
					<th></th>
					<th>Column 1</th>
					<th>Column 2</th>
					<th>Column 3</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<label className='checkbox'>
							<input type='checkbox' />
							<span></span>
						</label>
					</td>
					<td>Line 1</td>
					<td>Line 1</td>
					<td>Line 1</td>
					<td>
						<nav className='right-align'>
							<button className='none m l'>Button</button>
							<button className='none'>
								<i>more_vert</i>
							</button>
						</nav>
					</td>
				</tr>
				<tr>
					<td>
						<label className='checkbox'>
							<input type='checkbox' />
							<span></span>
						</label>
					</td>
					<td>Line 2</td>
					<td>Line 2</td>
					<td>Line 2</td>
					<td>
						<nav className='right-align'>
							<button className='none m l'>Button</button>
							<button className='none'>
								<i>more_vert</i>
							</button>
						</nav>
					</td>
				</tr>
				<tr>
					<td>
						<label className='checkbox'>
							<input type='checkbox' />
							<span></span>
						</label>
					</td>
					<td>Line 3</td>
					<td>Line 3</td>
					<td>Line 3</td>
					<td>
						<nav className='right-align'>
							<button className='none m l'>Button</button>
							<button className='none'>
								<i>more_vert</i>
							</button>
						</nav>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default TabularTable;
