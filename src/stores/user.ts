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
        fetchError: null as unknown | null,
        totalCount: 0 as number,
        currentPage: 1 as number,
        searchTerm: '' as string,
    }),

    actions: {
        async fetchUsers(searchTerm: string, currentPage?: number) {
            const page = currentPage || 1
            const canFetch = searchTerm !== this.searchTerm || page !== this.currentPage

            if (!canFetch) return

            this.fetchState = 'pending'
            this.fetchError = null

            const searchQuery: searchQuery = {
                searchTerm,
                page,
            }

            try {
                const { total_count, items } = await githubApi.searchUsers(searchQuery)

                this.users = items
                this.totalCount = total_count
                this.currentPage = page
                this.searchTerm = searchTerm
                this.fetchState = 'done'
                this.fetchError = null
            } catch (error) {
                this.fetchState = 'error'
                this.fetchError = error
                console.error(error)
            }
        },
    },
})
