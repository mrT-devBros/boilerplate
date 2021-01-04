import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
	return (
		<Link to={props.link ? props.link : '/'} className="Button">
			<button onClick={props.clicked} className="Button top">
				{props.children}
			</button>
			<button onClick={props.clicked} className="Button bot">
				{props.children}
			</button>
		</Link>
	);
};

export default Button;
