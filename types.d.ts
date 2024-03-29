interface IResult {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number
    }
}

type ISearchResult = {
    query?: {
        pages?: Result[]
    }
}