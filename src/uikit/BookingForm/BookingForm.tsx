import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './BookingForm.css';
import './BookingForm.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
// import {} from '.';

/**
 * @interface IBookingForm
 * @description BookingForm props types
 */
export interface IBookingForm{
    children?: React.ReactNode;
}

/**
 * @function BookingForm
 * @param props - props for children 
 * @returns {BookingForm}
 */
export function BookingForm({children}: IBookingForm){
    /**
     * @constant className - build the css classes to add to the BookingForm
     */
    const className = clsx(
        'BookingForm',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
