import { defineStore } from 'pinia'
import { githubApi } from '@/services/githubApiService'
import type { searchQuery } from '@/services/githubApiService'

export type User = {
    login: string
    id: string
    html_url: string
    avatar_url: string
}
export type FetchState = 'idle' | 'pending' | 'done' | 'error'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [] as User[],
        fetchState: 'idle' as FetchState,
        totalCount: 0 as number,
        currentPage: 1 as number,
        searchTerm: '' as string,
    }),

    actions: {
        async fetchUsers(searchTerm: string, currentPage?: number) {
            this.fetchState = 'pending'

            const searchQuery: searchQuery = {
                searchTerm,
                page: currentPage || 1,
            }

            try {
                const { total_count, items } = await githubApi.searchUsers(searchQuery)

                this.users = items
                this.totalCount = total_count
                this.currentPage = currentPage || 1
                this.searchTerm = searchTerm
            } catch (error) {
                this.fetchState = 'error'
                console.error(error)
            } finally {
                this.fetchState = 'done'
            }
        },
    },
})
