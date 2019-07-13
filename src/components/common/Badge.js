import React from 'react';

function Badge({color, children}) {
    return (
        <span className={"badge badge-warning"}>
            {children}
        </span>
    );
}

export default Badge;