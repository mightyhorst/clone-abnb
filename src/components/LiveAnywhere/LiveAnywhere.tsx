import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './LiveAnywhere.css';
import './LiveAnywhere.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface ILiveAnywhere
 * @description LiveAnywhere props types
 */
export interface ILiveAnywhere{
    children?: React.ReactNode;
}

/**
 * @function LiveAnywhere
 * @param props - props for children 
 * @returns {LiveAnywhere}
 */
export function LiveAnywhere({children}: ILiveAnywhere){
    /**
     * @constant className - build the css classes to add to the LiveAnywhere
     */
    const className = clsx(
        'LiveAnywhere',
    );
    return (<>
        <div className={className}>
            <h2>
                Live Anywhere
            </h2>
            {children}
        </div>
    </>);
}
