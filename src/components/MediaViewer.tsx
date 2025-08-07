import { useState, useEffect } from 'preact/hooks'
import Card from './Card'

interface Props {
	media: string[]
}

export default function MediaViewer({ media }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		if (currentIndex >= media.length && media.length > 0) {
			setCurrentIndex(media.length - 1)
		} else if (media.length === 0) {
			setCurrentIndex(0)
		}
	}, [media.length, currentIndex])

	const goPrev = () => {
		if (media.length > 0) {
			setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
			setIsLoading(true)
		}
	}
	const goNext = () => {
		if (media.length > 0) {
			setCurrentIndex((prev) => (prev + 1) % media.length)
			setIsLoading(true)
		}
	}

	const isVideo = (url: string) => {
		return typeof url === 'string' && (url.includes('youtube.com') || url.includes('youtu.be'))
	}

	if (media.length === 0) {
		return (
			// La clase flex-shrink-0 se agrega aquí también para mantener la consistencia
			<Card userClass="aspect-video overflow-hidden flex flex-shrink-0 items-center justify-center">
				No hay medios disponibles para este proyecto.
			</Card>
		)
	}

	return (
		<div class="flex-shrink-0 grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] items-center w-full">
			{media.length > 1 && (
				<button
					onClick={goPrev}
					className="py-1.5 px-2 me-1 2xl:me-3 2xl:text-2xl 2xl:py-3 2xl:px-4 rounded-full flex items-center justify-center text-emerald-200 bg-emerald-950 hover:bg-emerald-700 hover:text-white hover:cursor-pointer transition-all duration-300"
				>
					<i class="fa-solid fa-angle-left"></i>
				</button>
			)}

			<Card userClass="aspect-video overflow-hidden px-0 py-0 relative">
				{isLoading && (
					<div class="absolute inset-0 flex items-center justify-center bg-black z-10">
						<div class="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-emerald-700 rounded-full animate-spin"></div>
					</div>
				)}
				{isVideo(media[currentIndex]) ? (
					<iframe
						src={media[currentIndex] + '?rel=0'}
						class="w-full h-full"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						onLoad={() => setIsLoading(false)}
					></iframe>
				) : (
					<img
						src={`/projects/${media[currentIndex]}`}
						class="w-full h-full"
						alt="Project media"
						onLoad={() => setIsLoading(false)}
					/>
				)}
			</Card>

			{media.length > 1 && (
				<button
					onClick={goNext}
					className="py-1.5 px-2 ms-1 2xl:ms-3 2xl:text-2xl 2xl:py-3 2xl:px-4 rounded-full flex items-center justify-center text-emerald-200 bg-emerald-950 hover:bg-emerald-700 hover:text-white hover:cursor-pointer transition-all duration-300"
				>
					<i class="fa-solid fa-angle-right"></i>
				</button>
			)}
			{media.length > 1 && (
				<div class="flex justify-center mt-2 gap-1 col-span-3">
					{media.map((_, i) => (
						<div
							key={i}
							class={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-emerald-500' : 'bg-gray-400'}`}
						></div>
					))}
				</div>
			)}
		</div>
	)
}
