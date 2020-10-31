import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import student from './components/student';
import Notfound from './components/notFound';
import ErrorExample from './components/errorExample';
import Shield from './components/ErrorHandler';
import { Router, Route, browserHistory } from 'react-router';
import { Switch, Link } from 'react-router-dom';

const routing = (
	<Router history={browserHistory}>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/counters">counters</Link>
					</li>
					<li>
						<Link to="/student">student</Link>
					</li>
					<li>
						<Link to="/ErrorExample">error</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/counters" component={Counters} />
				<Route path="/student" component={student} />
				<Shield>
					<Route path="/ErrorExample" component={ErrorExample} />
				</Shield>
				<Route path="*" component={Notfound} />
			</Switch>
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
