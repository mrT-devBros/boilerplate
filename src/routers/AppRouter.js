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

import DashboardPage from '../components/Pages/DashboardPage';
import ProjectsPage from '../components/Pages/ProjectsPage';
import NotFoundPage from '../components/Pages/NotFoundPage';
import Layout from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Layout>
			<Switch>
				<Route path="/" component={DashboardPage} exact />
				<Route path="/projects" component={ProjectsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Layout>
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
