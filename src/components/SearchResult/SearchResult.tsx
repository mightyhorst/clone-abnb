import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './SearchResult.css';
import './SearchResult.responsive.css';

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
 * @interface ISearchResult
 * @description SearchResult props types
 */
export interface ISearchResult{
    
}

/**
 * @function SearchResult
 * @param props - props for children 
 * @returns {SearchResult}
 */
export function SearchResult(props: ISearchResult){
    return (<>
        <div className='SearchResult'>
            <ImageCarousel images={images} />
            <div className='SearchItemDetails'>
                <div className='SearchItemHeader'>
                    <h4>
                    “Entire apartment in Adelaide”
                    </h4>
                    <h3>
                    “Great value. Walk. in the city”
                    </h3>
                    <Button variant='love'>
                        love icon
                    </Button>
                </div>
                <div className='SearchItemStats'>
                    span 
                    “2 guests”
                    span 
                    “1 bed”
                    span 
                    “1 bath”
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
