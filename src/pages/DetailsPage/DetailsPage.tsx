import React from 'react';

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
    HouseBeds,
    HouseAmmenities,
} from '../../components';
import {
    Column,
    BookingDates,
    BookingForm,
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
                    <HouseBeds />
                    <HouseAmmenities />
                    <BookingDates />
                </Column.TwoThirds>
                <Column.Third>
                    <BookingForm />
                </Column.Third>
            </Column.Container>
        </section>
    </>);
}
