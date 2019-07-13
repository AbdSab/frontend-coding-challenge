import React from 'react';

function Badge({icon, type, children}) {

    const typeClass = "badge-"+type;

    return (
        <span className={"badge mr-2 "+typeClass}>
            <img src={icon} alt="Icon"/>
            <span className={"ml-1"}>{children}</span>
        </span>
    );
}

export default Badge;