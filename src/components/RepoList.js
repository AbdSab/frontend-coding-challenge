import React, { useState, useEffect  } from 'react';
import Repo from './Repo';
import repoMockData from '../mock/data';
import githubApiParser from '../services/githubApiParser';

const RepoList = () => {

    const DAYS_INTERVAL = 30;
    const [repos, setRepos] = useState([]);

    const fetchRepos = () =>{
        const result = githubApiParser(repoMockData);
        setRepos(result);
    };

    useEffect( () => {
        fetchRepos();
        console.log(repos)
    }, [repos]);

    const reposList = repos.map(repo => (<Repo key={repo.id} data={repo} interval={DAYS_INTERVAL} />));

    return (
        <div className={"row"}>
            {reposList}
        </div>
    );
}

export default RepoList;