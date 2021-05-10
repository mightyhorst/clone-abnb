import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseDetails.css';
import './HouseDetails.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseDetails
 * @description HouseDetails props types
 */
export interface IHouseDetails{
    children?: React.ReactNode;
}

/**
 * @function HouseDetails
 * @param props - props for children 
 * @returns {HouseDetails}
 */
export function HouseDetails({children}: IHouseDetails){
    /**
     * @constant className - build the css classes to add to the HouseDetails
     */
    const className = clsx(
        'HouseDetails',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
