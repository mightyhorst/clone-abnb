import React from 'react';
// import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ExploreNearby.css';
import './ExploreNearby.responsive.css';

/**
 * @requires Components
 */
import {ExploreNearbyCard} from './ExploreNearbyCard';
import {} from '../../uikit';

/**
 * @interface IExploreNearby
 * @description ExploreNearby props types
 */
export interface IExploreNearby{
    children?: React.ReactNode;
}

/**
 * @function ExploreNearby
 * @param props - props for children 
 * @returns {ExploreNearby}
 */
export function ExploreNearby({children}: IExploreNearby){
    return (<>
        <section className={'ExploreNearby'}>
            <ExploreNearbyCard.List>
                <ExploreNearbyCard
                    imgSrc='/img/nearby-1.jpg'
                    title={'Karaka'}
                    driveTime={6.5}
                />
            </ExploreNearbyCard.List>
        </section>
    </>);
}
