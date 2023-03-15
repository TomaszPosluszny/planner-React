import React from 'react';

import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './planner.css'

function Footer() {
	
	return (
		<>
		<footer className="footer">
			<p class="footer__boxes">Ogarniam finanse to profesionalny menadżer wydatków</p>
			<div classNam="footer__box-social">
			
<span  className='footer__box-link' >
<FontAwesomeIcon icon="fa-brands fa-square-twitter" />   <FontAwesomeIcon icon="fab fa-facebook-square" /> <FontAwesomeIcon icon="fa-brands fa-instagram" /></span>
				{/* <i class="fab fa-facebook-square"></i>
				<i class="fab fa-instagram"></i> */}
			</div>
			<p className="footer__bottom-text"> &copy;<span classNam="footer__year"></span>Ogarniam Finanse 2022</p>
		</footer>
		</>
	);
}

export default Footer;
