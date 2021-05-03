import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './SearchResult.css';
import './SearchResult.responsive.css';

/**
 * @requires Components
 */
// import {} from '..';

/**
 * @interface ISearchResult
 * @description SearchResult props types
 */
export interface ISearchResult{
    children?: React.ReactNode;
}

/**
 * @function SearchResult
 * @param props - props for children 
 * @returns {SearchResult}
 */
export function SearchResult({children}: ISearchResult){
    /**
     * @constant className - build the css classes to add to the SearchResult
     */
    const className = clsx(
        'SearchResult',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
