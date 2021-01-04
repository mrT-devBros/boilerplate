import React from 'react';

import Contact from './Contact';

const Contacts = () => {
	return (
		<div className="Contacts">
			<ul className="Contacts-list">
				<Contact contact="likedin" />
				<Contact contact="github" />
				<Contact contact="gmail" />
				<Contact contact="resume" />
			</ul>
		</div>
	);
};

export default Contacts;
