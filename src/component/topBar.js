import React from 'react';
//listen for them messages from

function TopBar() {
	return (
		<header className='tertiary-container'>
			<nav>
				<button className='circle transparent'>
					<i>menu</i>
				</button>
				<h5 className='max center-align'>Title</h5>
				<button className='circle transparent'>
					<img
						className='responsive'
						src='/favicon.png'
						alt='change this you loser'
					/>
				</button>
			</nav>
		</header>
	);
}

export default TopBar;
