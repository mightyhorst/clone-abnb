import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ThingsToKnow.css';
import './ThingsToKnow.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IThingsToKnow
 * @description ThingsToKnow props types
 */
export interface IThingsToKnow{
    children?: React.ReactNode;
}

/**
 * @function ThingsToKnow
 * @param props - props for children 
 * @returns {ThingsToKnow}
 */
export function ThingsToKnow({children}: IThingsToKnow){
    /**
     * @constant className - build the css classes to add to the ThingsToKnow
     */
    const className = clsx(
        'ThingsToKnow',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
