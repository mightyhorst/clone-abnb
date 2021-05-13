import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DiscoverExperiences.css';
import './DiscoverExperiences.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IDiscoverExperiences
 * @description DiscoverExperiences props types
 */
export interface IDiscoverExperiences{
    children?: React.ReactNode;
}

/**
 * @function DiscoverExperiences
 * @param props - props for children 
 * @returns {DiscoverExperiences}
 */
export function DiscoverExperiences({children}: IDiscoverExperiences){
    /**
     * @constant className - build the css classes to add to the DiscoverExperiences
     */
    const className = clsx(
        'DiscoverExperiences',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
