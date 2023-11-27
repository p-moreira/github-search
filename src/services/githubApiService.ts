const FETCH_OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
    },
}

type searchQuery = {
    searchTerm: string
    page?: number
    perPage?: number
}

export const githubApi = {
    searchUsers: async (query: searchQuery, options?: {}) => {
        if (!query.searchTerm) {
            throw new Error('Search term is required')
        }

        const path = '/api/search/users'
        const seachParams = {
            q: query.searchTerm,
            page: `${query.page}` || '1',
            per_page: `${query.perPage}` || '20',
        }
        const queryString = new URLSearchParams(seachParams).toString()
        const url = `${path}?${queryString}`

        return (await fetch(url, { ...options, ...FETCH_OPTIONS })).json()
    },
}
