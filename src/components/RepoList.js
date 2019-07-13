import React, { useState, useEffect  } from 'react';
import Repo from './Repo';
import {fetchGithubRepos} from '../api/githubApi';
import RepoPlaceholder from "./RepoLoading/RepoPlaceholder";

const RepoList = () => {

    const DAYS_INTERVAL = 30;
    const MAX_LOADING_PLACEHOLDER = 3;

    const initState = {
        repos: [],
        fetching:false,
        hasMore: true,
        error: false,
        isLoading: false
    }

    const [state, setState] = useState(initState);
    const [scrollBottom, setScrollBottom] = useState(false);

    useEffect( () => {
        const fetchRepos = async ()=>{
            const config = {
                interval:DAYS_INTERVAL
            }
            try {
                const data = await fetchGithubRepos(config);
                setState({
                    hasMore: data.incomplete_results,
                    repos: [...state.repos, ...data.items],
                    isLoading: false
                });
            }catch(error){
                setState({
                    error
                });
            }
        }
        setState({
            ...state,
            isLoading: true
        });
        fetchRepos();
    }, [scrollBottom]);

    const reposList = state.repos.map(repo => (
        <Repo key={repo.id} data={repo} interval={DAYS_INTERVAL} />
        ));

    const reposPlaceholderList = () => {
        const list = [];
        for(let i=0; i<MAX_LOADING_PLACEHOLDER; i++){
            list.push((<RepoPlaceholder/>));
        }
        return list;
    }



    return (
        <div className={"row"}>
            {reposList}
            {state.isLoading &&
                reposPlaceholderList()
            }
        </div>
    );
}

export default RepoList;