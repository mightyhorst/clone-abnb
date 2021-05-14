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
import {
    LiveAnywhereCard,
} from './LiveAnywhereCard';
import {} from '../../uikit';

/**
 * @interface ILiveAnywhere
 * @description LiveAnywhere props types
 */
export interface ILiveAnywhere{
}

/**
 * @function LiveAnywhere
 * @param props - props for children 
 * @returns {LiveAnywhere}
 */
export function LiveAnywhere({}: ILiveAnywhere){
    /**
     * @constant className - build the css classes to add to the LiveAnywhere
     */
    const className = clsx(
        'LiveAnywhere',
    );
    return (<>
        <section className={className}>
            <h2>
                Live Anywhere
            </h2>
            <LiveAnywhereCard.List>
                <LiveAnywhereCard 
                    imgSrc='/img/house1.jpg'
                    title='Outdoor getaways'
                />
                <LiveAnywhereCard 
                    imgSrc='/img/house2.jpg'
                    title='Unique stays'
                />
                <LiveAnywhereCard 
                    imgSrc='/img/house3.jpg'
                    title='Entire homes'
                />
                <LiveAnywhereCard 
                    imgSrc='/img/house4.jpg'
                    title='Pets allowed'
                />
            </LiveAnywhereCard.List>
        </section>
    </>);
}
