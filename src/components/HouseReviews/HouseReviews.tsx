import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseReviews.css';
import './HouseReviews.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseReviews
 * @description HouseReviews props types
 */
export interface IHouseReviews{
    children?: React.ReactNode;
}

/**
 * @function HouseReviews
 * @param props - props for children 
 * @returns {HouseReviews}
 */
export function HouseReviews({children}: IHouseReviews){
    /**
     * @constant className - build the css classes to add to the HouseReviews
     */
    const className = clsx(
        'HouseReviews',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
