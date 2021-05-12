import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './MorePlacesToStay.css';
import './MorePlacesToStay.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {
    PlaceToStay,
    Button,
} from '../../uikit';

/**
 * @interface IMorePlacesToStay
 * @description MorePlacesToStay props types
 */
export interface IMorePlacesToStay{
    // children?: React.ReactNode;
}

/**
 * @function MorePlacesToStay
 * @param props - props for children 
 * @returns {MorePlacesToStay}
 */
export function MorePlacesToStay(props: IMorePlacesToStay){
    return (<>
        <div className={'MorePlacesToStay'}>
            <h2>
                More places to stay
            </h2>
            <nav className="more-places-to-stay__nav">
                <span>
                    1 / 3 
                </span>
                <div className="more-places-to-stay__nav-btns">
                    <Button addClasses='more-places-to-stay__nav-btn-left'>
                        <i className="fa fa-chevron-left"></i>
                    </Button>
                    <Button addClasses='more-places-to-stay__nav-btn-right'>
                        <i className="fa fa-chevron-right"></i>
                    </Button>
                </div>
            </nav>
            <div className='more-places-to-stay__places'>
                <PlaceToStay 
                    imgSrc='/img/house1.png'
                    isLoved
                    pricePerNight={241}
                    currency='AUD'
                    noOfBeds={2}
                    averageRating={0}
                    noOfReviews={0}
                />
                <PlaceToStay 
                    imgSrc='/img/house2.png'
                    isLoved={false}
                    pricePerNight={241}
                    currency='AUD'
                    noOfBeds={2}
                    averageRating={4.97}
                    noOfReviews={36}
                />
                <PlaceToStay 
                    imgSrc='/img/house3.png'
                    isLoved={false}
                    pricePerNight={241}
                    currency='AUD'
                    noOfBeds={2}
                    averageRating={3.0}
                    noOfReviews={12}
                />
                <PlaceToStay 
                    imgSrc='/img/house4.png'
                    isLoved={false}
                    pricePerNight={241}
                    currency='AUD'
                    noOfBeds={2}
                />
            </div>
        </div>
    </>);
}
