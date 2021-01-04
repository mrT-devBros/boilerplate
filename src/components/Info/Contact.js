import React from 'react';

const Contact = (props) => {
	const handleClick = () => {
		window.open(link);
	};

	const links = {
		github: {
			link: 'https://github.com/mrT-devBros',
			icon: <i className="fab fa-github-square"></i>
		},
		linkedin: {
			link: 'https://www.linkedin.com/in/tra-le-phuong-b4a436203/',
			icon: <i className="fab fa-linkedin-in"></i>
		},
		gmail: {
			link: 'lptra13@gmail.com',
			icon: <i className="far fa-envelope"></i>
		},
		resume: {
			link: 'being updated',
			icon: <i className="far fa-id-badge"></i>
		}
	};

	let link,
		icon,
		background = null;

	switch (props.contact) {
		case 'github':
			link = links.github.link;
			icon = links.github.icon;
			background = 'Github';
			break;
		case 'likedin':
			link = links.linkedin.link;
			icon = links.linkedin.icon;
			background = 'Likedin';
			break;
		case 'gmail':
			link = links.gmail.link;
			icon = links.gmail.icon;
			background = 'Gmail';
			break;
		case 'resume':
			link = links.resume.link;
			icon = links.resume.icon;
			background = 'Resume';
			break;
		default:
			break;
	}

	return (
		<div className={`ContactItem ${background}`}>
			<div onClick={handleClick}>
				<span className="ContactLabel">{props.contact}</span> {icon}
			</div>
		</div>
	);
};

export default Contact;
