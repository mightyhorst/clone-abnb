import React from 'react';

/**
 * @requires Styles
 */
import './HomePage.css';
import './HomePage.responsive.css';

/**
 * @requires Layout
 */
import {Layout} from '../Layout';
/**
 * @requires Components
 */
import {
    HeroUnit,
    ExploreNearby,
    LiveAnywhere,
    BecomeHost,
    DiscoverExperiences,
} from '../../components';
import {
    PageAlert,
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
        <Layout.Standard pageName="HomePage">
            <PageAlert />
            <HeroUnit />
            <ExploreNearby />
            <LiveAnywhere />
            <BecomeHost />
            <DiscoverExperiences />
        </Layout.Standard>
    </>);
}
