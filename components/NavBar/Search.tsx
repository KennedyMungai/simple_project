'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type Props = {}

const Search = (props: Props) => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSearch('')
		router.push(`/search/${search}`)
	}

	return (
		<form
			className='w-50 flex justify-center md:justify-between'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='bg-white p-2 w-80 text-xl rounded-xl focus:outline-none text-center placeholder:text-sm placeholder:font-semibold'
				placeholder='Enter Search Term'
			/>
			<button className='p-2 text-xl rounded-xl bg-slate-500 ml-2 font-bold'>
				🚀
			</button>
		</form>
	)
}

export default Search
