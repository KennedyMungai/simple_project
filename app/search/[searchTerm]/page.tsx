import getWikiSearchResults from '@/lib/getWikiSearchResults'

type Props = {
	params: {
		searchTerm: string
	}
}

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
    const wikiData: ISearchResult = await getWikiSearchResults(searchTerm)
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if(!wikiData.query?.pages)
    {
        return {
            title: `${displayTerm} Not Found`
        }
    }

	return {
		title: displayTerm,
        description: `A wikipedia page about ${displayTerm}`
	}
}

const SearchTermPage = async ({ params: { searchTerm } }: Props) => {
	const wikiData: ISearchResult = await getWikiSearchResults(searchTerm)
	const results: IResult[] | undefined = wikiData?.query?.pages

	const content = (
		<main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
			{results ? (
				Object.values(results).map((result) => (
					<p key={result.pageid}>{JSON.stringify(result)}</p>
				))
			) : (
				<h2 className='p-2 text-xl'>{`${searchTerm} Not Found`}</h2>
			)}
		</main>
	)

	return content
}

export default SearchTermPage
