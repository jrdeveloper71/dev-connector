import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ProfileGithub extends Component {
   constructor(props) {
      super(props)
      this.state = {
         clientId: '4536922b863e2062571a',
         clientSecret: '8f4ae898d8629750e6c7d9b987513c7fd3e0d4ab',
         count: 5,
         sort: "created:asc",
         repos: [],
      }
      this._isMounted = false
   }

   componentWillUnmount() {
      this._isMounted = false
   }

   componentDidMount() {
      this._isMounted = true
      const {username} = this.props
      const {count, sort, clientId, clientSecret} = this.state
      let toFetch = `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
      fetch(toFetch)
         .then(res => res.json())
         .then((data) => {
            this._isMounted && this.setState({
               repos: data
            })
         })
         .catch(err => console.log("fetching github api error", err))
   }
   
   render() {
      const {repos} = this.state
      const repoItems = repos.map((repo) => (
         <div key={repo.id} className="card card-body mb-2">
            <div className="row">
               <div className="col-md-6">
                  <h4><a href={repo.html_url} className="text-info">{repo.name}</a></h4>
                  <p>{repo.description}</p>
               </div>
               <div className="col-md-6">
                  <span className="badge badge-info mr-1">
                     Stars: {repo.stargazers_count}
                  </span>
                  <span className="badge badge-secondary mr-1">
                     Watchers: {repo.watchers_count}
                  </span>
                  <span className="badge badge-success">
                     Forks: {repo.forks_count}
                  </span>
               </div>
            </div>
         </div>
      ))
      return repos.length > 0 && (
         <div>
            <hr />
            <h3 className="mb-4">Latest Github Repos</h3>
            {repoItems}
         </div>
      )
   }
}

ProfileGithub.propTypes = {
   username: PropTypes.string.isRequired,
}

export default ProfileGithub
