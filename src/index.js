import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/index.css';

import App from './components/App';
import Program from './components/Program';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/hej" component={Program} />
					<Route component={NotFound}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}


// import registerServiceWorker from './registerServiceWorker';
render(<Root />, document.getElementById('root'));
// registerServiceWorker();