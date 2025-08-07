import { useState } from 'preact/hooks'
import projectsList from '../utils/data/ProjectsList'
import Card from './Card'
import TechnologiesUsedOn from './TechnologiesUsedOn'
import MediaViewer from './MediaViewer'

export default function ProjectsViewer() {
	const [selectedProject, setSelectedProject] = useState<number>(0)

	return (
		<>
			{projectsList.map((p) => {
				return (
					<button
						key={p.id}
						disabled={selectedProject === p.id}
						class={`rounded-2xl not-disabled:hover:animate-gradient-text ${selectedProject === p.id ? 'shrink flex-2 lg:flex-10' : 'flex-1'} transition-all duration-300`}
						onClick={() => setSelectedProject(p.id)}
					>
						<Card
							userClass={`px-2 py-1.5 w-full h-full flex flex-col min-h-0 ${selectedProject === p.id ? 'justify-between' : 'justify-center'}`}
						>
							<span
								class={`project-name ${selectedProject === 0 ? 'text-2xl' : selectedProject === p.id ? 'text-xl' : 'text-lg'} font-bold transition-all duration-300`}
							>
								{p.name}
							</span>

							{selectedProject === p.id && (
								<>
									<div className="overflow-y-auto">
										<p class="text-sm">{p.description}</p>
										<ul class="flex gap-2 place-self-center">
											{p.links.map((l, index) => {
												const isLast = index === p.links.length - 1
												return (
													<>
														<li>
															<small>
																<a
																	class="underline hover:underline-offset-2 transition-all duration-500"
																	href={l.url}
																	target="_blank"
																>
																	{l.title}
																</a>
															</small>
														</li>
														{!isLast && <span>-</span>}
													</>
												)
											})}
										</ul>
										<MediaViewer media={[...p.images, ...p.video]} />
									</div>
									<TechnologiesUsedOn technologiesUsed={p.technologies} />
								</>
							)}
						</Card>
					</button>
				)
			})}
		</>
	)
}
