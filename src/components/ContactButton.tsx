import type SocialLink from '../utils/types/SocialLink'

interface Props {
	userClass?: string
	socialLink: SocialLink
	showText: boolean
}
const baseClass =
	'select-none hover:cursor-pointer border border-2 border-emerald-700 shadow-lg text-shadow-lg hover:text-shadow-white/20 hover:shadow-emerald-700/30 flex-grow w-full lg:w-fit h-fit flex justify-center items-center p-3 2xl:p-5 rounded-2xl transition-all duration-300 2xl:text-2xl'

export default function ContactButton({ userClass, socialLink, showText }: Props) {
	return (
		<a href={socialLink.link} target="_blank" class={`${baseClass} ${userClass}`}>
			<i class={`${socialLink.icon}`} />
			{showText && <span>{socialLink.text}</span>}
		</a>
	)
}
