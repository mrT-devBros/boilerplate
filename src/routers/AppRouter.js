import React from 'react';
import {
	Router,
	BrowserRouter,
	Route,
	Switch,
	Link,
	NavLink
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact />
				<PrivateRoute path="/dashboard" component={DashboardPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>

	// <BrowserRouter>
	// 	<div>
	// 		<Header />
	// 		<Switch>
	// 			<Route path="/" component={LoginPage} exact />
	// 			<Route path="/dashboard" component={ExpenseDashboardPage} />
	// 			<Route path="/create" component={AddExpensePage} />
	// 			<Route path="/edit/:id" component={EditExpensePage} />
	// 			<Route path="/help" component={HelpPage} />
	// 			<Route component={NotFoundPage} />
	// 		</Switch>
	// 	</div>
	// </BrowserRouter>
);

export default AppRouter;