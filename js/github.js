class GitHub {

    constructor() {
        this.cliant_id = 'baf9cdb5c5a1a5bff2ac'
        this.cliant_secret = 'b294edcaa5e53651f48f738b2beb34e670d718cb'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliant_id}&client_secret=${this.cliant_secret}`)
            // const profileResponse = await fetch(`https://api.github.com/users/${user}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`)
        const repos = await repoResponse.json()

        const profile = await profileResponse.json()
        return {
            profile,
            repos

        }
    }

}