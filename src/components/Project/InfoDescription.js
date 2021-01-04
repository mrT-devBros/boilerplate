import React from 'react';

const InfoDescription = (props) => {
	const summaries = props.summary.split('.');
	return (
		<div className="Project-description">
			<div className="Project-label">ABOUT</div>
			<p className="Project-summaries">
				{summaries.map((summary) => (
					<p className="Project-summary">{summary}.</p>
				))}
			</p>
		</div>
	);
};

export default InfoDescription;
