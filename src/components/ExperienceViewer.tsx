import Card from './Card'
import formatDate from '../utils/functions/FormatDateMM-YYYY'
import { useState } from 'preact/hooks'
import TechnologiesUsedOn from './TechnologiesUsedOn'
import jobExperience from '../utils/data/JobExperience'

export default function ExperienceViewer() {
	const [selectedOption, setSelectedOption] = useState<null | string>(null)
	const selectedJob = jobExperience.find((j) => j.id === selectedOption)

	return (
		<>
			<Card>
				<div class="mb-4.5 2xl:mb-7">
					<h3 class="text-2xl 2xl:text-4xl font-bold mb-1.5 lg:mb-6 2xl:mb-10">
						Working Experience
					</h3>
					<hr />
				</div>
				<ul class="flex flex-col gap-3 text-black">
					{jobExperience.map((item) => {
						return (
							<li>
								<button
									disabled={selectedOption === item.id}
									onClick={() => setSelectedOption(item.id)}
									className="w-full py-2 2xl:py-4 2xl:text-2xl text-emerald-100 bg-emerald-950 not-disabled:hover:bg-emerald-700 not-disabled:hover:text-white disabled:opacity-70 shadow-sm not-disabled:hover:text-shadow-2xs not-disabled:hover:text-shadow-black/30 rounded-2xl h-full transition-all duration-300"
								>
									{item.company}
								</button>
							</li>
						)
					})}
				</ul>
			</Card>
			<Card>
				{selectedJob ? (
					<div class="flex flex-col h-full">
						<div class="mb-4 2xl:mb-7">
							<h3 class="text-2xl 2xl:text-4xl font-bold mb-1.5 2xl:mb-3">{selectedJob.role}</h3>
							<small class="flex justify-between px-2">
								<span>On: {selectedJob.company}</span>
								<div>
									<span>{formatDate(selectedJob.startDate)}</span>
									<span> - </span>
									<span>{formatDate(selectedJob.finishDate)}</span>
								</div>
							</small>
							<hr />
						</div>

						<div class="flex-grow overflow-y-auto pr-2 2xl:pr-4 scroll">
							<ul class="list-disc pl-5 2xl:pl-10 text-start space-y-2 2xl:space-y-10">
								{selectedJob.bulletPoints.map((bp) => (
									<li class="opacity-60 hover:opacity-100 hover:text-shadow-lg hover:text-shadow-white/20 transition-opacity duration-300 cursor-default 2xl:text-3xl">
										{bp}
									</li>
								))}
							</ul>
						</div>

						<div class="flex-shrink-0 mt-3">
							<div class="mb-4 2xl:mb-7 text-start">
								<div class="px-2 mb-1.5 2xl:mb-3 flex justify-between">
									<small>Used Technologies:</small>
									<div class="flex gap-2">
										{selectedJob.repos.map((r) => {
											return (
												<>
													<small>
														<a
															class="underline underline-offset-2 hover:underline-offset-3 hover:text-shadow-lg hover:text-shadow-white/30 transition duration-300"
															target="_blank"
															href={r.url}
														>
															{r.title}
														</a>
													</small>
													{selectedJob.repos.length > 1 && <small>-</small>}
												</>
											)
										})}
										<small>
											<a
												class="underline underline-offset-2 hover:underline-offset-3 hover:text-shadow-lg hover:text-shadow-white/30 transition duration-300"
												target="_blank"
												href={selectedJob.link}
											>
												Take a look of the project
											</a>
										</small>
									</div>
								</div>
								<hr />
							</div>
							<TechnologiesUsedOn technologiesUsed={selectedJob.technologiesUsed} />
						</div>
					</div>
				) : (
					<div class="text-gray-300 italic px-5 text-2xl py-10 self-center 2xl:text-4xl">
						👈 Click on any button of the left side to see my working experience.
					</div>
				)}
			</Card>
		</>
	)
}
