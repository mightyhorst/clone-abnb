import React from 'react';

/**
 * @requires Styles
 */
import './HomePage.css';
import './HomePage.responsive.css';

/**
 * @requires Layout
 */
import {
    
} from '../Layout';
/**
 * @requires Components
 */
import {
    HeroUnit,
    ExploreNearby,
    LiveAnywhere,
    BecomeHost,
    DiscoverExperiences,
    PageFooter,
} from '../../components';
import {
    PageAlert,
    Wrapper,
} from '../../uikit';

/**
 * @interface IHomePage
 * @description HomePage props types
 */
export interface IHomePage{
    // children?: React.ReactNode;
}

/**
 * @function HomePage
 * @param {IHomePage} props - props for children 
 * @returns {HomePage}
 */
export function HomePage(props: IHomePage){
    return (<>
        <section className="HomePage">
            <PageAlert>
                <a href="#">
                    Get the latest on our COVID response plan
                </a>
            </PageAlert>
            <HeroUnit />
            <Wrapper>
                <ExploreNearby />
                <LiveAnywhere />
                <BecomeHost />
                <DiscoverExperiences />
            </Wrapper>
            <PageFooter />
        </section>
    </>);
}
