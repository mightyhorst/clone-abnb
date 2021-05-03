import React from 'react';

import './SearchResultsHeader.css';

interface ISearchResultsHeader{
    children: React.ReactNode;
}

export function SearchResultsHeader({children}: ISearchResultsHeader){
    const className = 'SearchResultsHeader';
    return (<>
        <header className={className}>
            {children}
        </header>
    </>);
}
