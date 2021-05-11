import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './MorePlacesToStay.css';
import './MorePlacesToStay.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {
    PlaceToStay,
} from '../../uikit';

/**
 * @interface IMorePlacesToStay
 * @description MorePlacesToStay props types
 */
export interface IMorePlacesToStay{
    // children?: React.ReactNode;
}

/**
 * @function MorePlacesToStay
 * @param props - props for children 
 * @returns {MorePlacesToStay}
 */
export function MorePlacesToStay(props: IMorePlacesToStay){
    /**
     * @constant className - build the css classes to add to the MorePlacesToStay
     */
    const className = clsx(
        'MorePlacesToStay',
    );
    return (<>
        <div className={className}>
            <div className='more-places-to-stay__places'>
                <MorePlacesToStay />
                <MorePlacesToStay />
                <MorePlacesToStay />
                <MorePlacesToStay />
                <MorePlacesToStay />
            </div>
        </div>
    </>);
}
