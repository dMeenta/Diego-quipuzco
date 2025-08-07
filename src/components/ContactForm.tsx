import { useEffect, useRef, useState } from 'preact/hooks'

export default function ContactForm() {
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [showToast, setShowToast] = useState(false)
	const [animateToast, setAnimateToast] = useState(false)
	const timeoutRef = useRef<number>()
	const hideTimeoutRef = useRef<number>()

	const isFormValid = email.trim() !== '' && message.trim() !== ''

	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current)
			clearTimeout(hideTimeoutRef.current)
		}
	}, [])

	const handleSubmit = async (e: Event) => {
		e.preventDefault()
		setStatus('sending')

		const form = e.currentTarget as HTMLFormElement
		const formData = new FormData(form)

		try {
			const response = await fetch('https://formspree.io/f/xldlnpne', {
				method: 'POST',
				headers: {
					Accept: 'application/json'
				},
				body: formData
			})

			if (response.ok) {
				setStatus('success')
				form.reset()
				setEmail('')
				setMessage('')
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
				}, 2500)
			} else {
				setStatus('error')
			}
		} catch (error) {
			console.error('Form error:', error)
			setStatus('error')
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} class="flex flex-col gap-3 w-full">
				<input
					type="email"
					name="email"
					value={email}
					onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
					placeholder="Write your email"
					required
					class="px-3 py-2 border-2 border-emerald-700 rounded-2xl placeholder:italic"
				/>
				<textarea
					name="message"
					value={message}
					onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
					placeholder="Your message"
					rows={5}
					required
					class="p-3 border-2 border-emerald-700 rounded-2xl placeholder:italic"
				></textarea>
				<button
					type="submit"
					disabled={!isFormValid || status === 'sending'}
					class="text-shadow-black/20 text-shadow-lg rounded-2xl py-2 text-emerald-100 bg-emerald-950 not-disabled:hover:bg-emerald-700 not-disabled:hover:text-white not-disabled:hover:cursor-pointer disabled:opacity-70 transition-all duration-300"
				>
					{status === 'sending' ? 'Sending...' : 'Send Message'}
				</button>
			</form>
			{showToast && (
				<div
					className={`
      fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 
      transition-all duration-500 ease-in-out bg-white
      ${status === 'success' ? 'text-emerald-700' : 'text-red-600'}
      ${animateToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
    `}
				>
					{status === 'success' ? 'Message sent successfully!' : 'Oops! Something went wrong.'}
				</div>
			)}
		</>
	)
}
