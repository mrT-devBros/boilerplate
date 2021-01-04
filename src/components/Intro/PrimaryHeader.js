import React from 'react';

const style = {
	fontSize: '7rem',
	letterSpacing: '4px',
	color: '$white-color',
	marginBottom: '20px'
};

const PrimaryHeader = (props) => {
	return <h1 style={style}>{props.children}</h1>;
};

export default PrimaryHeader;
