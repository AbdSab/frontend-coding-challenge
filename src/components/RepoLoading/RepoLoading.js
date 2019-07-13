import React from 'react';
import "./style.scss";

const RepoLoading = () => {
    return(
        <div className={"col-12 mt-2 p-2 shadow-sm"}>
            <div className={"row"}>
                <div className={"col-md-2 col-12"}>
                    <div className={"w-100 img-fluid image-placeholder"}></div>
                </div>
                <div className={"col-md-10 col-12"}>
                    <div className={"text-placeholder mt-3"}></div>
                    <div className={"text-placeholder mt-4"}></div>
                    <div className={"text-placeholder mt-4"}></div>
                </div>
            </div>
        </div>
    )
}

export default RepoLoading;
