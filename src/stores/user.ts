import { defineStore } from 'pinia'
import { githubApi } from '@/services/githubApiService'
import type { searchQuery } from '@/services/githubApiService'

export type User = {
    login: string
    id: string
    html_url: string
    avatar_url: string
}

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
    }),

    actions: {
        async fetchUsers(searchTerm: string) {
            try {
                const searchQuery: searchQuery = {
                    searchTerm,
                    page: 1,
                }
                const { total_count, items } = await githubApi.searchUsers(searchQuery)
                console.log(items)
                console.log(total_count)
                this.users = items
            } catch (error) {
                console.error(error)
            }
        },
    },
})
