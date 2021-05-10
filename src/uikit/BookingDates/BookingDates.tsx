import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './BookingDates.css';
import './BookingDates.responsive.css';

/**
 * @requires Components
 */
import {
    Calendar,
} from '..';
// import {} from '.';

/**
 * @interface IBookingDates
 * @description BookingDates props types
 */
export interface IBookingDates{
    // children?: React.ReactNode;
}

/**
 * @function BookingDates
 * @param props - props for children 
 * @returns {BookingDates}
 */
export function BookingDates(props: IBookingDates){
    /**
     * @constant className - build the css classes to add to the BookingDates
     */
    const className = clsx(
        'BookingDates',
    );
    return (<>
        <div className={className}>
            <h3>
                Select check-in date
            </h3>
            <p>
                Add your travel dates for exact pricing
            </p>
            <div className="booking-dates__columns">
                <BookingDates />
                <BookingDates />
            </div>
            <footer className='booking-dates__footer'>
                <button className='booking-dates__keyboard'>
                    <i className="fa fa-keyboard"></i>
                </button>
                <button className='booking-dates__clear-dates'>
                    Clear dates
                </button>
            </footer>
        </div>
    </>);
}
