/**
 * Github Api parser
 */
const parseApiRepos = (repos) =>{
    const items =  repos.items.map( repo => {
        return {
            repoName: repo.name,
            repoDescription: repo.description,
            repoStarsCount: repo.stargazers_count,
            repoIssuesCount: repo.open_issues,
            userName: repo.owner.login,
            userAvatar: repo.owner.avatar_url
        }
    });
    return {
        ...repos,
        items:items
    }
};

export default parseApiRepos;