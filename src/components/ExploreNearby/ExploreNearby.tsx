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
}

/**
 * @function ExploreNearby
 * @param props - props for children 
 * @returns {ExploreNearby}
 */
export function ExploreNearby({}: IExploreNearby){
    return (<>
        <section className={'ExploreNearby'}>
            <h2>
                Explore Nearby
            </h2>
            <ExploreNearbyCard.List>
                
                <ExploreNearbyCard
                    imgSrc='/img/nearby-1.jpg'
                    title={'Nelson Bay'}
                    driveTime={15}
                />

                <ExploreNearbyCard
                    imgSrc='/img/nearby-2.jpg'
                    title={'Pokolbin'}
                    driveTime={2}
                />

                <ExploreNearbyCard
                    imgSrc='/img/nearby-3.jpg'
                    title={'Katoomba'}
                    driveTime={4.5}
                />

                <ExploreNearbyCard
                    imgSrc='/img/nearby-4.jpg'
                    title={'Coffs Harbour'}
                    driveTime={5}
                />
                
                <ExploreNearbyCard
                    imgSrc='/img/nearby-5.jpg'
                    title={'Mudgee'}
                    driveTime={5.5}
                />

                <ExploreNearbyCard
                    imgSrc='/img/nearby-6.jpg'
                    title={'Byron Bay'}
                    driveTime={9}
                />

                <ExploreNearbyCard
                    imgSrc='/img/nearby-7.jpg'
                    title={'Sydney'}
                    driveTime={3.5}
                />
                
                <ExploreNearbyCard
                    imgSrc='/img/nearby-8.jpg'
                    title={'Orange'}
                    driveTime={6.5}
                />
            </ExploreNearbyCard.List>
        </section>
    </>);
}
