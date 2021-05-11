import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HostDetails.css';
import './HostDetails.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
// import {} from '.';

/**
 * @interface IHostDetails
 * @description HostDetails props types
 */
export interface IHostDetails{
    children?: React.ReactNode;
}

/**
 * @function HostDetails
 * @param props - props for children 
 * @returns {HostDetails}
 */
export function HostDetails({children}: IHostDetails){
    /**
     * @constant className - build the css classes to add to the HostDetails
     */
    const className = clsx(
        'HostDetails',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
