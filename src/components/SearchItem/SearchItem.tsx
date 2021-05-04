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
    IImage,
    Button,
} from '../../uikit';

/**
 * @interface ISearchItem
 * @description SearchItem props types
 */
export interface ISearchItem{
    images: IImage[];
    subTitle: string;
    title: string;
    noOfGuests: number;
    noOfBeds: number;
    noOfBaths: number;
    isLoved?: boolean;
}

/**
 * @function SearchItem
 * @param props - props for children 
 * @returns {SearchItem}
 */
export function SearchItem(props: ISearchItem){
    return (<>
        <div className='SearchItem'>
            <ImageCarousel title='Superhost' images={props.images} />
            <div className='SearchItemDetails'>
                <div className='SearchItemHeader'>
                    <h4>
                        {props.subTitle}
                    </h4>
                    <h3>
                        {props.title}
                    </h3>
                    <Button variant='love'>
                        love icon
                    </Button>
                </div>
                <div className='SearchItemStats'>
                    <span>
                        {props.noOfGuests} guests
                    </span>
                    <span>
                        {props.noOfBeds} bed{props.noOfBeds > 1 && 's'}
                    </span>
                    <span>
                        {props.noOfBaths} bath{props.noOfBaths > 1 && 's'}
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
