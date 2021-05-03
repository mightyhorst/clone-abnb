import React from 'react';

import './SearchResultsList.css';

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
