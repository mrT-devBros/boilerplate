import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => (
	<li className={'Navigation-item'}>
		<Link to={props.link} onClick={props.clicked}>
			{' '}
			{props.children}
		</Link>
	</li>
);

export default NavigationItem;
