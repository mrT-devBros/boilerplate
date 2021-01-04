import React from 'react';

const ButtonClose = (props) => {
	return (
		<button onClick={props.clicked} className="Button-close">
			<i className="fas fa-times"></i>
		</button>
	);
};

export default ButtonClose;
