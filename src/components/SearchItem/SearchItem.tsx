import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './SearchItem.css';
import './SearchItem.responsive.css';

/**
 * @requires Components
 */
import {
    ImageCarousel,
    Button,
} from '../../uikit';

const images = [
    {
        id: '1',
        imgSrc: '/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg',
        isActive: true,
    },
    {
        id: '2',
        imgSrc: '/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg',
        isActive: false,
    },
    {
        id: '3',
        imgSrc: '/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg',
        isActive: false,
    },
];

/**
 * @interface ISearchItem
 * @description SearchItem props types
 */
export interface ISearchItem{
    
}

/**
 * @function SearchItem
 * @param props - props for children 
 * @returns {SearchItem}
 */
export function SearchItem(props: ISearchItem){
    return (<>
        <div className='SearchItem'>
            <ImageCarousel title='Superhost' images={images} />
            <div className='SearchItemDetails'>
                <div className='SearchItemHeader'>
                    <h4>
                        Entire apartment in Adelaide
                    </h4>
                    <h3>
                        Great value. Walk. in the city
                    </h3>
                    <Button variant='love'>
                        love icon
                    </Button>
                </div>
                <div className='SearchItemStats'>
                    <span>
                    “2 guests”
                    </span>
                    <span>
                    span 
                    </span>
                    <span>
                    “1 bed”
                    </span>
                    <span>
                    “1 bath”
                    </span>
                </div>
                <div className='SearchItemDates'>
                    “14 Dec - 25 Dec”
                </div>
                <footer className='SearchItemFooter'>
                    <div className='SearchItemRatings'>
                        stars= 4.70
                        totalReviews=22000
                    </div>
                    <div className='SearchItemPrice'>
                        price=87
                        discounted=77
                        nights=10
                    </div>
                </footer>                
            </div>
        </div>
    </>);
}
