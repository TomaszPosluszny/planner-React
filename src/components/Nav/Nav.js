import React from 'react';

import './Nav.scss'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './planner.css'

function Nav() {
	
	return (
		<>
	<nav className="deskop">
			<h1 className="header__name-company">Ogarniam finanse</h1>
			<Link to ="/" className="deskop__link" >Menadżer</Link>
			<a className="deskop__link" href="planer.html">Planer</a>
			<a className="deskop__link" href="notes.html">Notatnik</a>
			<div>
			<Link className="deskop__link--border" to="/registration"> Załóż konto</Link>
				<a className="deskop__link--border" href="login.html">Zaloguj</a>
			</div>
		</nav>
		</>
	);
}

export default Nav;