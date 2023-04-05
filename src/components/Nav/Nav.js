import React from 'react';

import './Nav.scss'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './planner.css'

function Nav() {
	
	return (
		<>
	<nav className="deskop">
			
			<h1 className="header__name-company"><Link to ="planner-React" className="deskop__link" >Planer</Link></h1>
		
			<div>
			<Link className="deskop__link--border" to="/registration"> Załóż konto</Link>
			<Link  className="deskop__link--border" to="login">Zaloguj</Link>
			</div>
		</nav>
		</>
	);
}

export default Nav;