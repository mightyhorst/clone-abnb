import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DetailsPage.css';
import './DetailsPage.responsive.css';

/**
 * @requires Components
 */
import {
    DetailsPageHeader,
    DetailsPagePhotos,
    HouseHeader,
    HouseStats,
    HouseDetails,
    HouseAmmenities,
} from '../../components';
import {
    Column,
} from '../../uikit';

/**
 * @interface IDetailsPage
 * @description DetailsPage props types
 */
export interface IDetailsPage{
    // children?: React.ReactNode;
}

/**
 * @function DetailsPage
 * @param {IDetailsPage} props - props for children 
 * @returns {DetailsPage}
 */
export function DetailsPage(props: IDetailsPage){
    return (<>
        <section className={'DetailsPage'}>
            <DetailsPageHeader />
            <DetailsPagePhotos />
            <Column.Container>
                <Column.TwoThirds>
                    <HouseHeader />
                    <HouseStats />
                    <HouseDetails />
                    <HouseAmmenities />
                </Column.TwoThirds>
                <Column.Third>
                </Column.Third>
            </Column.Container>
        </section>
    </>);
}
