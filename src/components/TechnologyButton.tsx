import { useEffect, useRef, useState } from 'preact/hooks'
import type Technology from '../utils/types/Technology'

interface Props {
	technology: Technology
}

export default function TechnologyButton({ technology }: Props) {
	const [showToast, setShowToast] = useState(false)
	const [animateToast, setAnimateToast] = useState(false)
	const [barLvl, setBarLvl] = useState(0)
	const [isHovering, setIsHovering] = useState(false)
	const timeoutRef = useRef<number>()
	const hideTimeoutRef = useRef<number>()

	const lvlMap: Record<string, number> = {
		basic: 33,
		intermediate: 66,
		advanced: 100
	}

	function handleClick() {
		setBarLvl(lvlMap[technology.lvl] ?? 0)
		setShowToast(true)

		clearTimeout(timeoutRef.current)
		clearTimeout(hideTimeoutRef.current)

		timeoutRef.current = window.setTimeout(() => {
			setAnimateToast(true)
		}, 50)

		hideTimeoutRef.current = window.setTimeout(() => {
			setAnimateToast(false)

			timeoutRef.current = window.setTimeout(() => {
				setShowToast(false)
			}, 550)
		}, 1000)
	}

	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current)
			clearTimeout(hideTimeoutRef.current)
		}
	}, [])

	const techColor = `#${technology.hexColor}`

	return (
		<>
			<button
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				onClick={handleClick}
				class="group select-none aspect-square w-fit h-fit flex justify-center items-center p-3 2xl:p-5 border-2 rounded-2xl transition-shadow duration-300"
				style={{
					borderColor: techColor,
					boxShadow: showToast || isHovering ? `0 0 5px 1px ${techColor}` : undefined
				}}
			>
				<img
					src={`https://cdn.simpleicons.org/${technology.slug}/${technology.hexColor}`}
					alt={`${technology.name} logo`}
					class="w-8 h-8 2xl:w-12 2xl:h-12 group-hover:scale-115 duration-300"
					draggable={false}
				/>
			</button>

			{showToast && (
				<div
					className={`
            select-none fixed px-10 pt-1 pb-2 2xl:pt-2 2xl:pb-3 2xl:px-15 text-lg 2xl:text-3xl
            bottom-5 left-1/2 -translate-x-1/2 bg-white text-black rounded-full z-50
            transition-all duration-500 ease-in-out
            ${animateToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
          `}
					style={{ boxShadow: `0 0 10px 2px ${techColor}` }}
				>
					<span>{technology.name}</span>
					<small class="block 2xl:my-2">{technology.lvl}</small>
					<div class="w-full h-2 2xl:h-3 bg-gray-400 rounded-full overflow-hidden">
						<div
							class="h-full bg-black transition-all duration-700"
							style={{ width: `${barLvl}%` }}
						></div>
					</div>
				</div>
			)}
		</>
	)
}
