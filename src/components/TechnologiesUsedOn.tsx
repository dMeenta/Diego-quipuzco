import { useState, useEffect, useRef } from 'preact/hooks'
import TechnologyButton from './TechnologyButton'
import technologies from '../utils/data/Technologies'
import type Technology from '../utils/types/Technology'

interface Props {
	technologiesUsed: string[]
}

export default function TechnologiesUsedOn({ technologiesUsed }: Props) {
	const scrollRef = useRef<HTMLDivElement>(null)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)

	const techList = technologiesUsed
		.map((slug) => technologies.find((t) => t.slug === slug))
		.filter((t): t is Technology => !!t)

	const updateScrollButtons = () => {
		const el = scrollRef.current
		if (!el) return
		const { scrollLeft, scrollWidth, clientWidth } = el
		setCanScrollLeft(scrollLeft > 0)
		setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
	}

	const scroll = (dir: 'left' | 'right') => {
		const el = scrollRef.current
		if (!el) return
		const scrollAmount = el.clientWidth
		el.scrollTo({
			left: dir === 'right' ? el.scrollLeft + scrollAmount : el.scrollLeft - scrollAmount,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		const ref = scrollRef.current
		if (!ref) return
		updateScrollButtons()
		ref.addEventListener('scroll', updateScrollButtons)
		return () => ref.removeEventListener('scroll', updateScrollButtons)
	}, [techList.length])

	return (
		<div className="grid grid-cols-[auto_1fr_auto] items-center w-full">
			<button
				onClick={() => scroll('left')}
				disabled={!canScrollLeft}
				className="py-1.5 px-2 me-1 2xl:me-3 2xl:text-2xl 2xl:py-3 2xl:px-4 rounded-full flex items-center justify-center text-emerald-200 bg-emerald-950 not-disabled:hover:bg-emerald-700 not-disabled:hover:text-white not-disabled:hover:cursor-pointer disabled:opacity-70 shadow-sm transition-all duration-300"
			>
				<i class="fa-solid fa-angle-left"></i>
			</button>

			<div
				ref={scrollRef}
				className="flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden no-scrollbar py-2"
			>
				{techList.map((t) => {
					return (
						<div key={t.slug} className="flex-shrink-0">
							<TechnologyButton technology={t} />
						</div>
					)
				})}
			</div>

			<button
				onClick={() => scroll('right')}
				disabled={!canScrollRight}
				className="py-1.5 px-2 ms-1 2xl:ms-3 2xl:text-2xl 2xl:py-3 2xl:px-4 rounded-full flex items-center justify-center text-emerald-200 bg-emerald-950 not-disabled:hover:bg-emerald-700 not-disabled:hover:text-white not-disabled:hover:cursor-pointer disabled:opacity-70 shadow-sm transition-all duration-300"
			>
				<i class="fa-solid fa-angle-right"></i>
			</button>

			<style>
				{`
        .no-scrollbar::-webkit-scrollbar {
	        display: none;
        }
        .no-scrollbar {
	        scrollbar-width: none;
        }
        `}
			</style>
		</div>
	)
}
