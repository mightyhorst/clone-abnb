import React from 'react';

import './SearchResultsFilters.css';

interface ISearchResultsFilters{
    children: React.ReactNode;
}

export function SearchResultsFilters({children}: ISearchResultsFilters){
    const className = 'SearchResultsFilters';
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
