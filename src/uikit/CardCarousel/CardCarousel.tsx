import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './CardCarousel.css';
import './CardCarousel.responsive.css';

/**
 * @requires Components
 */
// import {CardSimple} from '../CardSimple';

/**
 * @interface ICardCarousel
 * @description CardCarousel props types
 */
export interface ICardCarousel{
    children?: React.ReactNode;
}

/**
 * @function CardCarousel
 * @param props - props for children 
 * @returns {CardCarousel}
 */
export function CardCarousel({children}: ICardCarousel){
    /**
     * @constant className - build the css classes to add to the CardCarousel
     */
    const className = clsx(
        'CardCarousel',
    );
    return (<>
        <div className={className}>
            <button className="card-carousel__left">
                <i className="fa fa-chevron-left"></i>
            </button>
            <div className="card-carousel__inner">
                {children}
            </div>
            <button className="card-carousel__right">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    </>);
}
