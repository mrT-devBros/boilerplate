import React from 'react';
import { Link } from 'react-router-dom';

const Brand = (props) => {
	return (
		<picture className="Brand">
			<source media="(max-width:650px)" srcSet="/images/mrt.png"></source>
			<Link to="/">
				<img src="/images/mrt.png" alt="Brand" onClick={props.clicked} />
			</Link>
		</picture>
	);
};
export default Brand;
