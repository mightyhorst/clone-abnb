import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseStats.css';
import './HouseStats.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseStats
 * @description HouseStats props types
 */
export interface IHouseStats{
    children?: React.ReactNode;
}

/**
 * @function HouseStats
 * @param props - props for children 
 * @returns {HouseStats}
 */
export function HouseStats({children}: IHouseStats){
    /**
     * @constant className - build the css classes to add to the HouseStats
     */
    const className = clsx(
        'HouseStats',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
