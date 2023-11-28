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
                    const { login, email } = user

                    const lowerCaseTerm = q.toLowerCase()
                    const lowerCaseLogin = login.toLowerCase()

                    const isLoginMatch = lowerCaseLogin.includes(lowerCaseTerm)
                    const isEmailMatch = email ? email.includes(lowerCaseTerm) : true

                    return isLoginMatch || isEmailMatch
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
