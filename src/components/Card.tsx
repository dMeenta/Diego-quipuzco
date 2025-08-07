interface Props {
	userClass?: string
	children?: preact.ComponentChildren
}
const baseClass =
	'overflow-hidden border-2 rounded-2xl p-5 2xl:p-7 text-center shadow-lg shadow-white/20 bg-gradient-to-b from-emerald-950/70 to-black'

export default function Card({ userClass, children }: Props) {
	return <div className={`${baseClass} ${userClass}`}>{children}</div>
}
