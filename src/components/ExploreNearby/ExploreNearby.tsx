import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ExploreNearby.css';
import './ExploreNearby.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IExploreNearby
 * @description ExploreNearby props types
 */
export interface IExploreNearby{
    children?: React.ReactNode;
}

/**
 * @function ExploreNearby
 * @param props - props for children 
 * @returns {ExploreNearby}
 */
export function ExploreNearby({children}: IExploreNearby){
    /**
     * @constant className - build the css classes to add to the ExploreNearby
     */
    const className = clsx(
        'ExploreNearby',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
