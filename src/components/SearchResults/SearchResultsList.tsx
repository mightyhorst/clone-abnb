import React from 'react';

interface ISearchResultsList{
    children: React.ReactNode;
}

export function SearchResultsList({children}: ISearchResultsList){
    const className = 'SearchResultsList';
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
