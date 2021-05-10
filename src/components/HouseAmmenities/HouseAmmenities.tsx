import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseAmmenities.css';
import './HouseAmmenities.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseAmmenities
 * @description HouseAmmenities props types
 */
export interface IHouseAmmenities{
    children?: React.ReactNode;
}

/**
 * @function HouseAmmenities
 * @param props - props for children 
 * @returns {HouseAmmenities}
 */
export function HouseAmmenities({children}: IHouseAmmenities){
    /**
     * @constant className - build the css classes to add to the HouseAmmenities
     */
    const className = clsx(
        'HouseAmmenities',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
