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
    }),

    actions: {
        async fetchUsers(searchTerm: string) {
            this.fetchState = 'pending'
            const searchQuery: searchQuery = {
                searchTerm,
                page: 1,
            }

            try {
                const { total_count, items } = await githubApi.searchUsers(searchQuery)
                this.users = items
            } catch (error) {
                this.fetchState = 'error'
                console.error(error)
            } finally {
                this.fetchState = 'done'
            }
        },
    },
})
