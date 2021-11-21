class Ui {

    // Ui constructor 
    constructor() {

        this.profile = document.getElementById('profile')


    }

    // Display  profile 
    showProfile(user) {

        this.profile.innerHTML = `
        
    
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Viev Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repo: ${user.public_repos}</span>
                <span class="badge badge-secundary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.Following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">
                        Company : ${user.company}
                    </li>
                    <li class="list-group-item">
                        Website/Blog : ${user.blog}
                    </li>
                    <li class="list-group-item">
                        Location : ${user.location}
                    </li>
                    <li class="list-group-item">
                        Member Since : ${user.created_at}
                    </li>

                </ul>
            </div>
        </div>

    </div>
    <h3 class="page-heading mb-3">

        Latest Repos
    </h3>
    <div id="repos"></div>
        
        `


    }
    showRepos(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank"></a>
                    ${repo.name}
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazer_count}</span>
                    <span class="badge badge-secundary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
    
                </div>
            </div>
        </div>
    
            
            `
        });


        document.getElementById('repos').innerHTML = output
    }

    // Clear profile after backspace all 
    clearProfile() {
        this.profile.innerHTML = ''

    }

    // Show alert if user is not found 
    showAlert(message, className) {

        this.clearAlert()

        //Create div
        const div = document.createElement('div')
            // Add Classes 
        div.className = className

        // Add text message 
        div.appendChild(document.createTextNode(message))
            // Get parent 
        const container = document.querySelector('.searchContainer')
        const search = document.querySelector('.search')
        container.insertBefore(div, search)


        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert()
        }, 3000)



    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()

        }



    }
}