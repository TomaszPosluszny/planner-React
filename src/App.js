import React from 'react';
import './App.scss'
import Planer from './components/Planer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas,)

function App() {
	return (
		<div>
			<Planer/>
		</div>
	);
}

export default App;
