import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,
        models: {
            user: Model,
        },
        routes() {
            this.namespace = 'api'

            this.get('/search/users', (schema, request) => {
                const { q } = request.queryParams
                const { models: filteredUsers } = schema.users.where((user) => {
                    return user.login.includes(q) || user.email.includes(q)
                })

                return {
                    total_count: filteredUsers.length,
                    incomplete_results: false,
                    items: filteredUsers,
                }
            })
        },
    })

    return server
}
