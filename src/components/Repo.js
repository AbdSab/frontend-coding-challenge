import React from 'react';
import Badge from "./common/Badge";

function Repo({data}) {
    const {userAvatar,userName,repoName,repoDescription,repoIssuesCount,repoStarsCount} = data;
    return (
        <div className={"col-12"}>
            <div className={"row"}>
                <div className={"col-md-3 col-12"}>
                    <img className={"img-fluid"} src={userAvatar} alt={userName+"'s avatar"}/>
                </div>
                <div className={"col-md-9 col-12"}>
                    <h2>{repoName}</h2>
                    <p>{repoDescription}</p>
                    <Badge>{repoStarsCount}</Badge>
                    <Badge>{repoIssuesCount}</Badge>
                    <span>Submitted 30 days ago</span>
                </div>
            </div>
        </div>
    );
}

export default Repo;