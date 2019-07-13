import React, { useState, useEffect  } from 'react';
import Repo from './Repo';
import {fetchGithubRepos} from '../api/githubApi';
import RepoLoading from "./RepoLoading/RepoLoading";

const RepoList = () => {

    const DAYS_INTERVAL = 30;

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
            const data = await fetchGithubRepos(config);
            console.log(data);
            setState({
                ...state,
                hasMore: data.incomplete_results,
                repos: [...state.repos, ...data.items],
                isLoading: false
            });
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

    const reposLoadingList = () => {
        const list = [];
        for(let i=0; i<5; i++){
            list.push((<RepoLoading/>));
        }
        return list;
    }

    return (
        <div className={"row"}>
            {reposList}
            {state.isLoading &&
                reposLoadingList()
            }
        </div>
    );
}

export default RepoList;