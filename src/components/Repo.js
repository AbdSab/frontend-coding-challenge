import React from 'react';
import Badge from "./common/Badge";
import starIcon from '../assets/icons/star.svg';
import issueIcon from '../assets/icons/issue-opened.svg';

function Repo({data, interval}) {
    const {userAvatar,userName,repoName,repoDescription,repoIssuesCount,repoStarsCount} = data;

    return (
        <div className={"col-12 mt-2 p-2 shadow-sm"}>
            <div className={"row"}>
                <div className={"col-md-2 col-12"}>
                    <img className={"w-100 img-fluid"} src={userAvatar} alt={userName+"'s avatar"}/>
                </div>
                <div className={"col-md-10 col-12"}>
                    <h2>{repoName}</h2>
                    <p>{repoDescription}</p>
                    <Badge type="warning" icon={starIcon}>{repoStarsCount}</Badge>
                    <Badge type="danger" icon={issueIcon}>{repoIssuesCount}</Badge>
                    <span className={"text-muted"}>Submitted {interval} days ago</span>
                </div>
            </div>
        </div>
    );
}

export default Repo;