import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './LocationMap.css';
import './LocationMap.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface ILocationMap
 * @description LocationMap props types
 */
export interface ILocationMap{
    children?: React.ReactNode;
}

/**
 * @function LocationMap
 * @param props - props for children 
 * @returns {LocationMap}
 */
export function LocationMap({children}: ILocationMap){
    /**
     * @constant className - build the css classes to add to the LocationMap
     */
    const className = clsx(
        'LocationMap',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
