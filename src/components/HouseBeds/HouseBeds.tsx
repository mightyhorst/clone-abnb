import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseBeds.css';
import './HouseBeds.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseBeds
 * @description HouseBeds props types
 */
export interface IHouseBeds{
    children?: React.ReactNode;
}

/**
 * @function HouseBeds
 * @param props - props for children 
 * @returns {HouseBeds}
 */
export function HouseBeds({children}: IHouseBeds){
    /**
     * @constant className - build the css classes to add to the HouseBeds
     */
    const className = clsx(
        'HouseBeds',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
