import React, { useState } from 'react';
import Repo from './Repo';
import {fetchGithubRepos} from '../api/githubApi';
import RepoPlaceholder from "./RepoLoading/RepoPlaceholder";
import useInfiniteScroll from '../helper/useInfiniteScroll';

const RepoList = () => {

    const DAYS_INTERVAL = 30;
    const MAX_REPOS_PLACEHOLDERS = 4;

    const initState = {
        repos: [],
        fetching:false,
        hasMore: true,
        error: false,
        curentPage: 1,
        firstFetch: true
    }

    const [state, setState] = useState(initState);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchRepos);

    function fetchRepos() {
        const fetchReposAsync = async ()=>{
            const config = {
                interval:DAYS_INTERVAL,
                page: state.curentPage
            }
            const data = await fetchGithubRepos(config);
            setState({
                ...state,
                hasMore: data.incomplete_results,
                repos: [...state.repos, ...data.items],
                curentPage: state.curentPage + 1,
                firstFetch: false
            });
            setIsFetching(false);
        }
        fetchReposAsync();
    }

    const reposList = state.repos.map(repo => (
        <Repo key={repo.id} data={repo} interval={DAYS_INTERVAL} />
        ));

    const reposPlaceholderList = () => {
        const list = [];
        for (let i=0; i< MAX_REPOS_PLACEHOLDERS; i++)
            list.push(<RepoPlaceholder key={i}/>);
        return list;
    }

    return (
        <div className={"row"}>
            {reposList}
            {state.firstFetch &&
                reposPlaceholderList()
            }
            {isFetching &&
                <RepoPlaceholder />
            }
        </div>
    );
}

export default RepoList;