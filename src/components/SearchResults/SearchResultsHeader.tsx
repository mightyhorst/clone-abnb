import React from 'react';

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
