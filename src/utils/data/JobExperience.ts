import type Job from '../types/Job'

const jobExperience: Job[] = [
	{
		id: 'job2',
		company: 'NeonHouseLed S.A.C',
		role: 'Full Stack Web Developer Intern',
		place: 'Lima, Peru',
		startDate: '01-2025',
		finishDate: '04-2025',
		bulletPoints: [
			'Led a multidisciplinary team during the migration of a web platform, using Laravel for the backend, MySQL as the database, and React with Astro and Tailwind for the frontend.',
			'Guided the integration of RESTful services and optimized communication between frontend and backend.',
			'Developed modern, responsive interfaces, ensuring proper UI display across devices and improving UX.',
			'Collaborated using tools such as Jira and Git/GitHub for project management and version control.',
			'Contributed innovative ideas and creative solutions, guiding my teammates toward better results.',
			'Proposed and integrated the Imgur API in the backend for image uploads'
		],
		technologiesUsed: [
			'react',
			'laravel',
			'mysql',
			'git',
			'github',
			'tailwindcss',
			'astro',
			'postman',
			'nodedotjs',
			'typescript',
			'html5',
			'css',
			'javascript',
			'php'
		],
		link: 'https://www.tamimaquinarias.com/'
	},
	{
		id: 'job1',
		company: 'Asociación Tecnológica del Perú',
		role: 'Computational System Engineer Intern',
		place: 'Lima, Peru',
		startDate: '09-2024',
		finishDate: '12-2024',
		bulletPoints: [
			"Contributed creative ideas to Figma designs, consolidating the best proposals from team members and enhancing the final product's appearance.",
			'Developed the frontend using Angular, creating reusable components for an internal platform.',
			'Integrated and optimized communication between frontend and backend by developing CRUD service operations.'
		],
		technologiesUsed: [
			'angular',
			'git',
			'github',
			'nodedotjs',
			'typescript',
			'tailwindcss',
			'javascript',
			'html5',
			'css',
			'bootstrap',
			'figma'
		],
		link: 'https://yapaykuy.com/'
	}
]

export default jobExperience
