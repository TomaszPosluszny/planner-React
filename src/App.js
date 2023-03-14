import React from 'react';
import './App.scss'
import Planer from './pages/Planer'
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas,fab  )

function App() {
	return (
		<div>
			<Planer/>
			<Footer/>
		</div>
	);
}

export default App;
