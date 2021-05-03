import React from 'react';

import './SearchResultsCallout.css';

interface ISearchResultsCallout{
    children: React.ReactNode;
}

export function SearchResultsCallout({children}: ISearchResultsCallout){
    const className = 'SearchResultsCallout';
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
