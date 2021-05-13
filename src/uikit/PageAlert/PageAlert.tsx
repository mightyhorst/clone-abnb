import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PageAlert.css';
import './PageAlert.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IPageAlert
 * @description PageAlert props types
 */
export interface IPageAlert{
    children?: React.ReactNode;
}

/**
 * @function PageAlert
 * @param props - props for children 
 * @returns {PageAlert}
 */
export function PageAlert({children}: IPageAlert){
    /**
     * @constant className - build the css classes to add to the PageAlert
     */
    const className = clsx(
        'PageAlert',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
