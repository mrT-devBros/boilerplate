import React from 'react';

import Brand from '../Info/Brand';
import DrawerToggle from './DrawerToggle';

const Toolbar = (props) => (
	<header className="Toolbar">
		<Brand clicked={props.clicked} />
		<DrawerToggle clicked={props.clicked} />
	</header>
);

export default Toolbar;
