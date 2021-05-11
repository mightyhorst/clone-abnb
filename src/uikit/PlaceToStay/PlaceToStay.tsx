import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PlaceToStay.css';
import './PlaceToStay.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IPlaceToStay
 * @description PlaceToStay props types
 */
export interface IPlaceToStay{
    children?: React.ReactNode;
}

/**
 * @function PlaceToStay
 * @param props - props for children 
 * @returns {PlaceToStay}
 */
export function PlaceToStay({children}: IPlaceToStay){
    /**
     * @constant className - build the css classes to add to the PlaceToStay
     */
    const className = clsx(
        'PlaceToStay',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
