import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseLocation.css';
import './HouseLocation.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseLocation
 * @description HouseLocation props types
 */
export interface IHouseLocation{
    children?: React.ReactNode;
}

/**
 * @function HouseLocation
 * @param props - props for children 
 * @returns {HouseLocation}
 */
export function HouseLocation({children}: IHouseLocation){
    /**
     * @constant className - build the css classes to add to the HouseLocation
     */
    const className = clsx(
        'HouseLocation',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
