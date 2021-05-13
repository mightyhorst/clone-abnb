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
import {Header} from '..';
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
    return (<>
        <div className='HeroUnit hero-unit'>
            <h1>
                <div> The </div>
                <div> Greatest </div>
                <div> Outdoors </div>
            </h1>
            <p>
                Wishlists curated by Airbnb.
            </p>
            <a href="#" className='hero-unit__get-inspired'>
                Get inspired
            </a>
        </div>
    </>);
}
