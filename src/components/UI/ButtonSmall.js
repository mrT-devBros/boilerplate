import React from 'react';

const ButtonSmall = (props) => {
	return (
		<div className="Button-small">
			<button onClick={props.clicked} className="Button-small top">
				{props.children}
			</button>
			<button onClick={props.clicked} className="Button-small bot">
				{props.children}
			</button>
		</div>
	);
};

export default ButtonSmall;
