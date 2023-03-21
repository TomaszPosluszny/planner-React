import React from 'react';
import './App.scss';
import Registration from './pages/Registration';
import { Router, Route, browserHistory   } from 'react-router-dom';
import Planer from './pages/Planer';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

function App() {
	return (
		
		<div>
				<Nav />
				<Planer />

				<Footer />
				
				
				{/* </Routes> */}
				</div>
	
	);
}

export default App;
