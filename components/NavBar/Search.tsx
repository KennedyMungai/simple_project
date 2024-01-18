'use client'
import { useRouter } from 'next/router'
import { useState } from 'react'


type Props = {}

const Search = (props: Props) => {
	const [search, setSearch] = useState('')
    const router = useRouter()

	return <div>Search</div>
}

export default Search
