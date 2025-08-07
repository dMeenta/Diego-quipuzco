export default function formatDate(stringDate: string): string {
	const [month, year] = stringDate.split('-')
	const date = new Date(Number(year), Number(month) - 1)
	return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date)
}
