import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HeroUnit.css';
import './HeroUnit.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IHeroUnit
 * @description HeroUnit props types
 */
export interface IHeroUnit{
    children?: React.ReactNode;
}

/**
 * @function HeroUnit
 * @param props - props for children 
 * @returns {HeroUnit}
 */
export function HeroUnit({children}: IHeroUnit){
    /**
     * @constant className - build the css classes to add to the HeroUnit
     */
    const className = clsx(
        'HeroUnit',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
