import React from 'react';

function topBar() {
	return (
		<header class='tertiary-container'>
			<nav>
				<button class='circle transparent'>
					<i>menu</i>
				</button>
				<h5 class='max center-align'>Title</h5>
				<button class='circle transparent'>
					<img class='responsive' src='/favicon.png' alt='remvoethislatter' />
				</button>
			</nav>
		</header>
	);
}

export default topBar;
