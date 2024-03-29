'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const SearchTermErrorPage = ({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) => {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='h-[90vh] flex items-center justify-center text-3xl font-semibold text-red-300'>
			<h2>Something Went Wrong</h2>
			<button onClick={() => reset()}>Try Again</button>
            or Go Back Home <Link href={'/'} className='underline'>Home 🏠</Link>
		</div>
	)
}

export default SearchTermErrorPage
