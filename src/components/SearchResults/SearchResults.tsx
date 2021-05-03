import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './SearchResults.css';
import './SearchResults.responsive.css';

/**
 * @requires Components
 */
import {SearchResultsHeader} from './SearchResultsHeader';
import {SearchResultsFilters} from './SearchResultsFilters';
import {SearchResultsCallout} from './SearchResultsCallout';
import {SearchResultsList} from './SearchResultsList';

/**
 * @interface ISearchResults
 * @description SearchResults props types
 */
export interface ISearchResults{
    children?: React.ReactNode;
}

/**
 * @function SearchResults
 * @param props - props for children 
 * @returns {SearchResults}
 */
export function SearchResults({children}: ISearchResults){
    /**
     * @constant className - build the css classes to add to the SearchResults
     */
    const className = clsx(
        'SearchResults',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}

/**
 * @namespace SearchResults
 */
SearchResults.Header = SearchResultsHeader;
SearchResults.Filters = SearchResultsFilters;
SearchResults.Callout = SearchResultsCallout;
SearchResults.List = SearchResultsList;
