type Props = {
    params: {
        searchTerm: string
    }
}

const SearchTermPage = ({params: {searchTerm}}: Props) => {
	return <section className="text-white">{searchTerm}</section>
}

export default SearchTermPage
