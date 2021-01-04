import React from 'react';

import Toolbar from '../Navigation/Toolbar';
import NavigationItems from '../Navigation/NavigationItems';
import Contacts from '../Info/Contacts';
import Footer from '../Layout/Footer';
import ProjectContext from '../../context/project-context';

class Layout extends React.Component {
	state = {
		navVisible: false
	};

	sideDrawerToggleHandler = () => {
		this.setState({ navVisible: !this.state.navVisible });
	};

	render() {
		let layout = null;
		this.state.navVisible
			? (layout = (
					<NavigationItems show clicked={this.sideDrawerToggleHandler} />
			  ))
			: (layout = <NavigationItems clicked={this.sideDrawerToggleHandler} />);

		return (
			<ProjectContext.Provider value={{ navVisible: this.state.navVisible }}>
				<React.Fragment>
					{layout}
					<Toolbar clicked={this.sideDrawerToggleHandler} />
					<Contacts />

					{this.props.children}

					<Footer />
				</React.Fragment>
			</ProjectContext.Provider>
		);
	}
}

export default Layout;
