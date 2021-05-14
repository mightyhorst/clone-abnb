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
import {
    DiscoverExperienceCard,
} from './DiscoverExperienceCard';
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
        'discover-experiences',
    );
    return (<>
        <section className={className}>
            <h2>
                Discover Experiences
            </h2>
            <h5>
                Unique activities with local experts—in person or online.
            </h5>
            <DiscoverExperienceCard.List>
                <DiscoverExperienceCard
                    imgSrc='/img/discover-experience-1.jpg'
                    title='Outdoor Collection'
                    description='Experiences that immerse you in nature.'
                />
                <DiscoverExperienceCard
                    imgSrc='/img/discover-experience-2.jpg'
                    title='Online Experiences'
                    description='Live, interactive activities led by Hosts.'
                />
                <DiscoverExperienceCard
                    imgSrc='/img/discover-experience-3.jpg'
                    title='Experiences'
                    description='Local things to do, wherever you are.'
                />
            </DiscoverExperienceCard.List>
        </section>
    </>);
}
