import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './BecomeHost.css';
import './BecomeHost.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IBecomeHost
 * @description BecomeHost props types
 */
export interface IBecomeHost{
    children?: React.ReactNode;
}

/**
 * @function BecomeHost
 * @param props - props for children 
 * @returns {BecomeHost}
 */
export function BecomeHost({children}: IBecomeHost){
    /**
     * @constant className - build the css classes to add to the BecomeHost
     */
    const className = clsx(
        'BecomeHost',
        'become-a-host',
    );
    return (<>
        <div className={className}>
            <h2>
                Become a Host
            </h2>
            <p>
                Earn extra income and unlock new opportunities by sharing your space.
            </p>
            <a href="#/become-a-host">
                Learn More
            </a>
        </div>
    </>);
}
