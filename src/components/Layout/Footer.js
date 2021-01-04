import React from 'react';

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="Footer-item">
				&copy; 2020 Tra Le Phuong. All Rights Reserved.
			</div>
			<div className="Footer-item">
				<div className="Footer-contact">
					Email:{' '}
					<a href="mailto:lptra13@gmail.com" className="Footer-link">
						lptra13@gmail.com
					</a>
				</div>
			</div>
			<div className="Footer-item">
				<div className="Footer-contact">
					Tel:{' '}
					<a href="tel: +84346400425" className="Footer-link">
						+84346400425
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
