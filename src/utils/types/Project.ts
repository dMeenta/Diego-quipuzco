interface Link {
	title: string
	linkType: 'repository' | 'deploy'
	url: string
}

export default interface Project {
	id: number
	name: string
	description: string
	technologies: string[]
	video: string[]
	images: string[]
	links: Link[]
}
