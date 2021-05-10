import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseHeader.css';
import './HouseHeader.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseHeader
 * @description HouseHeader props types
 */
export interface IHouseHeader{
    children?: React.ReactNode;
}

/**
 * @function HouseHeader
 * @param props - props for children 
 * @returns {HouseHeader}
 */
export function HouseHeader({children}: IHouseHeader){
    /**
     * @constant className - build the css classes to add to the HouseHeader
     */
    const className = clsx(
        'HouseHeader',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
