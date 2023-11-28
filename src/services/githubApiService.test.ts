import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { githubApi } from './githubApiService'
import { makeServer } from '@/mockServer/server'

describe('githubApi: searchUsers()', () => {
    let server: any

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should throw an error if the query param is missing', () => {
        expect(githubApi.searchUsers({ searchTerm: '' })).rejects.toThrow('Search term is required')
    })

    it('should return a list of 3 users when the seaching by "paulo"', async () => {
        server.createList('user', 3, {
            login: 'paulo',
        })

        const response = await githubApi.searchUsers({ searchTerm: 'paulo' })

        expect(response.items.length).toBe(3)
    })
})
