import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PlaceToStay.css';
import './PlaceToStay.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {Button} from '../Button';

/**
 * @interface IPlaceToStay
 * @description PlaceToStay props types
 */
export interface IPlaceToStay{
    // children?: React.ReactNode;
    isLoved?: boolean;
    imgSrc: string; 
    pricePerNight: number;
    currency?: string;
    noOfBeds: number;
    averageRating?: number;
    noOfReviews?: number;
}

/**
 * @function PlaceToStay
 * @param props - props for children 
 * @returns {PlaceToStay}
 */
export function PlaceToStay({
    isLoved=false,
    imgSrc='/img/house1.png',
    pricePerNight=241,
    currency='AUD',
    noOfBeds=2,
    averageRating,
    noOfReviews,
}: IPlaceToStay){
    return (<>
        <div className='PlaceToStay'>
            <div className="place-to-stay__img">
                <img src={imgSrc} alt="house" />
                <Button.Love isLoved={isLoved} />
            </div>
            <div className="place-to-stay__reviews">
                { noOfReviews > 1 ? 
                    <>
                        <div className="place-to-stay__total-rating">
                            {averageRating}
                        </div>
                        <div className="place-to-stay__total-reviews">
                            ({noOfReviews} reviews)
                        </div>
                    </> :
                    <>
                        No reviews yet
                    </>
                }
            </div>
            <div className="place-to-stay__details">
                <span className="place-to-stay__room">
                    Hotel Room
                </span>
                <span className="place-to-stay__beds">
                    {noOfBeds} beds
                </span>
                <span className="place-to-stay__address">
                    Unit two, Tipi and Bob's Waterfall
                </span>
            </div>
            <div className="place-to-stay__price">
                <strong>
                    ${pricePerNight} {currency} 
                </strong>
                <span>
                    / night
                </span>
            </div>
        </div>
    </>);
}
