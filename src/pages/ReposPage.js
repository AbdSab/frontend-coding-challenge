import React from 'react';
import RepoList from '../components/RepoList';

const ReposPage = () => {

    return (
        <div className="container">
            <div className={"mt-2"}></div>
            <h1>Most starred Repos in last 30 days</h1>
            <RepoList/>
        </div>
    );
}

export default ReposPage;