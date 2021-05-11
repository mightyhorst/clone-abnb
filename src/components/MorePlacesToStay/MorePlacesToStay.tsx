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
    /**
     * @constant className - build the css classes to add to the MorePlacesToStay
     */
    const className = clsx(
        'MorePlacesToStay',
    );
    return (<>
        <div className={className}>
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
                />
                <PlaceToStay 
                    imgSrc='/img/house2.png'
                    isLoved={false}
                />
                <PlaceToStay 
                    imgSrc='/img/house3.png'
                    isLoved={false}
                />
                <PlaceToStay 
                    imgSrc='/img/house4.png'
                    isLoved={false}
                />
            </div>
        </div>
    </>);
}
