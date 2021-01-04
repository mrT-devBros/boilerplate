import React from 'react';

const InfoHeader = (props) => {
	const skills = props.skills.map((skill) => (
		<span className="Skills-info" key={skill}>
			{' '}
			{skill.toUpperCase()}{' '}
		</span>
	));
	return (
		<header className="Project-header">
			<div className="Project-label">PROJECT</div>
			<div className="Project-name">{props.name}</div>
			{skills}
		</header>
	);
};

export default InfoHeader;
