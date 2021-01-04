import React from 'react';

import Project from '../Project/Project';

class Projects extends React.Component {
	state = {
		projects: [
			{
				name: 'Expensify-app',
				summary: `This app used to store your expenses that you spent and you can search, filter or remove the expense as well. So I used Firebase to store expenses from different users to make sure they only see and manage their own expenses`,
				skills: ['html & scss', 'reactjs', 'redux', 'firebase'],
				img: <img src="/images/expensify-app.jpg" alt="Expensify-app"></img>,
				link: 'https://react-expensify-app-1320.herokuapp.com/',
				linkCode: 'https://github.com/mrT-devBros/react-expensify-app'
			},

			{
				name: 'Portfolio',
				summary: `The idea behind this project was to create a showcase of some of my projects for the past few months. I tried to keep the UI as simple as possible without any fluff. This is a Single Page Application and is built using ReactJs and SCSS`,
				skills: ['html & scss', 'reactjs', 'responsive'],
				img: <img src="/images/porfolio.png" alt="Portfolio"></img>,
				link: 'https://portfolio-939e1.web.app/',
				linkCode: 'https://github.com/tranvanloc412/Porfolio'
			},

			{
				name: 'Forkify-app',
				summary: `This project applied MVC model, using ES6 Javascript to easily write and manage the code. I used Food2Fork API to fetch data about the meal ingredient that users search, for example Pizza, then they can choose to buy ingredients and make by themselves.`,
				skills: ['html & css', 'responsive', 'javascript'],
				img: <img src="/images/forkify-app.jpg" alt="Forkify-app"></img>,
				link: 'https://jorkify.herokuapp.com/',
				linkCode: 'https://github.com/mrT-devBros/forkify'
			},

			{
				name: 'Infinite-Scroll',
				summary: `This is one of my first projects. I wanted to create a website which stores all of my favorite pictures. For now, I used Unsplash API to fetch the data pictures, and then they is processed by Javascript to create the infinite effect.`,
				skills: ['html & css', 'responsive', 'javascript'],
				img: (
					<img src="/images/infinite-scroll.jpg" alt="Infinite-Scroll"></img>
				),
				link: 'https://mrt-devbros.github.io/infinite-scroll/',
				linkCode: 'https://github.com/mrT-devBros/infinite-scroll'
			},

			{
				name: 'Music-Player',
				summary: `This is one of my first projects. I wanted to create a website which stores all of my favorite songs and talks. I only use CSS to create animations, a custom audio play holder and also config webpack by myself. In addition to this, when I update songs on Firebase Storage, all of them will be added to this web`,
				skills: ['html & css', 'responsive', 'javascript'],
				img: <img src="/images/music-player.JPG" alt="Music-Player"></img>,
				link: 'https://mrt-devbros.github.io/music-player/',
				linkCode: 'https://github.com/mrT-devBros/music-player'
			},

			{
				name: 'Natours',
				summary: `This is one of my first projects. I applied the advance features CSS to create a website which serves for travelling. I only use CSS to create animations, and I used BEM methodology to name the classes.`,
				skills: ['html & scss', 'BEM methodology', 'responsive'],
				img: <img src="/images/natours.jpg" alt="Natours"></img>,
				link: 'https://mrt-devbros.github.io/natours/',
				linkCode: 'https://github.com/mrT-devBros/natours'
			}
		]
	};

	render() {
		const projectList = this.state.projects.map((project) => (
			<Project
				linkCode={project.linkCode}
				link={project.link}
				key={project.name}
				name={project.name}
				summary={project.summary}
				img={project.img}
				skills={project.skills}
			/>
		));
		return (
			<div className="Projects-Control">
				<h1>PORTFOLIO</h1>
				<p>
					These are my favorite projects I've worked on for the past months.
					Have a look around and make sure to hit me up!
				</p>
				<div className="Projects">{projectList}</div>
			</div>
		);
	}
}

export default Projects;
