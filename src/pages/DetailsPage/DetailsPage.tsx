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
    HouseAmenities,
    HouseReviews,
    HostDetails,
    HouseLocation, 
    ThingsToKnow,
    MorePlacesToStay,
    ExploreOtherOptions,
} from '../../components';
import {
    Row,
    Column,
    BookingDates,
    BookingForm,
    IPlaceToStay,
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

    const placesToStay: IPlaceToStay[] = [
        {
            imgSrc: '/img/house2.png',
            isLoved: false,
            pricePerNight: 241,
            currency: 'AUD',
            noOfBeds: 2,
            averageRating: 4.97,
            noOfReviews: 36,
        },
    ];

    return (<>
        <section className='DetailsPage'>
            <DetailsPageHeader />

            <DetailsPagePhotos />
            <Row>
                <Column.TwoThirds>
                    <HouseHeader />
                    <HouseStats />
                    <HouseDetails />
                    <HouseBeds />
                    <HouseAmenities />
                    <BookingDates />
                </Column.TwoThirds>
                <Column.Third>
                    <BookingForm />
                </Column.Third>
            </Row>
            <HouseReviews />
            <HostDetails />
            <HouseLocation />
            <ThingsToKnow />
            <MorePlacesToStay 
                placesToStay={placesToStay}
            />
            <ExploreOtherOptions />
        </section>
    </>);
}
