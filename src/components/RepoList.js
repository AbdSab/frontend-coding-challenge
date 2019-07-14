import React, { useState } from 'react';
import Repo from './Repo';
import {fetchGithubRepos} from '../api/githubApi';
import RepoPlaceholder from "./RepoPlaceholder/RepoPlaceholder";
import useInfiniteScroll from '../helper/useInfiniteScroll';

const RepoList = () => {

    const DAYS_INTERVAL = 30;
    const MAX_REPOS_PLACEHOLDERS = 4;
    const MAX_RESULT = 1000;

    const initState = {
        repos: [],
        fetching:false,
        hasMore: true,
        error: false,
        currentPage: 1,
        firstFetch: true,
        total: 0
    }

    const [state, setState] = useState(initState);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchRepos);

    const {error, firstFetch, hasMore} = state;

    function fetchRepos() {
        if(!hasMore) return;
        const fetchReposAsync = async ()=>{
            const config = {
                interval:DAYS_INTERVAL,
                page: state.currentPage
            }
            try {
                const data = await fetchGithubRepos(config);
                setState({
                    ...state,
                    hasMore: (state.total < MAX_RESULT),
                    repos: [...state.repos, ...data.items],
                    currentPage: state.currentPage + 1,
                    firstFetch: false,
                    total: state.total + data.items.length
                });
                setIsFetching(false);
            }catch(error){
                setState({...state, error:true});
            }
        }
        fetchReposAsync();
    }

    const reposList = state.repos.map(repo => (
        <Repo key={repo.id} data={repo} interval={DAYS_INTERVAL} />
        ));

    const reposPlaceholderList = Array.from(
        Array(MAX_REPOS_PLACEHOLDERS).keys(), n=>(<RepoPlaceholder key={n}/>)
    );

    return (
        <div className={"row"}>
            {reposList}
            {error &&
                <div className={"alert alert-danger w-100 mt-2"}>An error occurred while fetching data, please try again in a while ...</div>
            }
            {!error &&
                ((firstFetch && reposPlaceholderList) ||
                (isFetching && <RepoPlaceholder/>))
            }

        </div>
    );
}

export default RepoList;