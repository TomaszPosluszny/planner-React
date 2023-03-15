import React from 'react';

import './Nav.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './planner.css'

function Nav() {
	
	return (
		<>
	<nav className="deskop">
			<h1 className="header__name-company">Ogarniam finanse</h1>
			<a className="deskop__link" href="index.html">Menadżer</a>
			<a className="deskop__link" href="planer.html">Planer</a>
			<a className="deskop__link" href="notes.html">Notatnik</a>
			<div>
				<a className="deskop__link--border" href="registration.html">Załóż konto</a>
				<a className="deskop__link--border" href="login.html">Zaloguj</a>
			</div>
		</nav>
		</>
	);
}

export default Nav;