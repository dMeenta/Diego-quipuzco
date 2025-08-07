import type Project from '../types/Project'

const projectsList: Project[] = [
	{
		id: 1,
		name: 'Social Network for Gamers: LoudlyGmz',
		description:
			'A social network inspired in Reddit, where you can interact with other users, CRUD operations on Posts, comment what others share in game communities. It has a clean architecture aiming to scale into a microservices architecture.',
		technologies: [
			'angular',
			'spring',
			'mongodb',
			'postgresql',
			'docker',
			'git',
			'tailwindcss',
			'openjdk',
			'nodedotjs',
			'typescript',
			'html5',
			'css',
			'javascript',
			'junit5',
			'firebase',
			'postman',
			'apachemaven',
			'sonarqubeserver',
			'github'
		],
		images: [
			'/loudlygmz/ss1.webp',
			'/loudlygmz/ss2.webp',
			'/loudlygmz/ss3.webp',
			'/loudlygmz/ss4.webp',
			'/loudlygmz/ss5.webp'
		],
		links: [
			{
				title: 'FrontEnd Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/SolWeb-Proyecto'
			},
			{
				title: 'BackEnd Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/LoudlyGmz-Backend'
			},
			{
				title: 'Backend Documentation',
				linkType: 'deploy',
				url: 'https://loudlygmz-backend-s1.onrender.com/swagger-ui.html'
			},
			{
				title: 'FrontEnd Deploy Page',
				linkType: 'deploy',
				url: 'https://sol-web-proyecto.vercel.app/'
			}
		],
		video: ['https://www.youtube.com/embed/t80f7uwByTo']
	},
	{
		id: 2,
		name: 'Videogames News App: GMNews',
		description:
			'An application made to keep gamers informed about recent tendencies in videogames.',
		technologies: [
			'androidstudio',
			'firebase',
			'kotlin',
			'express',
			'mysql',
			'figma',
			'git',
			'nodedotjs',
			'javascript',
			'postman',
			'github'
		],
		images: [],
		links: [
			{
				title: 'Backend Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/GMNews_WebService'
			},
			{
				title: 'Android App Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/GMNews'
			}
		],
		video: ['/gmnews/gmnewsvideo.mp4']
	},
	{
		id: 3,
		name: 'Vocational test project using machine learning and symbolic reasoning',
		description:
			'A vocational test made with a supervised learning machine learning model for students with 48 questions recovered from RIASEC tests.',
		technologies: [
			'react',
			'nodedotjs',
			'mongodb',
			'tailwindcss',
			'docker',
			'typescript',
			'html5',
			'css',
			'python',
			'git',
			'javascript',
			'postman',
			'github',
			'fastapi'
		],
		images: ['/vocationaltest/ss1.webp', '/vocationaltest/ss2.webp', '/vocationaltest/ss3.webp'],
		links: [
			{
				title: 'Backend Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/SistIntelML'
			},
			{
				title: 'Frontend Repo',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/VocationalTestProjectFront'
			},
			{
				title: 'Deployed Project',
				linkType: 'deploy',
				url: 'https://dmeenta.github.io/VocationalTestProjectFront/'
			}
		],
		video: []
	},
	{
		id: 4,
		name: 'Missions App',
		description:
			"To-Do List app inspired on the videogame's missions systems where you need to finish some sub missions before you can complete the main mission. Ready to do CRUD operations!",
		technologies: [
			'react',
			'express',
			'postgresql',
			'nodedotjs',
			'html5',
			'css',
			'git',
			'javascript',
			'postman',
			'github'
		],
		images: ['/missions/ss1.webp', '/missions/ss2.webp'],
		video: [],
		links: [
			{
				title: 'Backend and Frontend',
				linkType: 'repository',
				url: 'https://github.com/dMeenta/Missions'
			},
			{
				title: 'Deployed app',
				linkType: 'deploy',
				url: 'https://missions-app.onrender.com/'
			}
		]
	}
]

export default projectsList
