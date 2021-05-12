import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './Review.css';
import './Review.responsive.css';

/**
 * @requires Components
 */
import {} from '../../components';
import {} from '../../uikit';

/**
 * @interface IReview
 * @description Review props types
 */
export interface IReview{
    children: React.ReactNode;
    profileImg: string;
    profileName: string;
    datePublished: string;
    reviewId: string;
}

/**
 * @function Review
 * @param props - props for children 
 * @returns {Review}
 */
export function Review({
    children,
    profileImg='/img/profile.jpg',
    profileName,
    datePublished,
    reviewId,
}: IReview){
    return (<>
        <div className='Review'>
            <div className="review__header">
                <div className="review__profile-img">
                    <img src={profileImg} alt="profile"/>
                </div>
                <div className="review__profile">
                    <h3> {profileName} </h3>
                    <h5> {datePublished} </h5>
                </div>
            </div>
            <p>
                {children}
            </p>
            <a 
                href={`/#/review/${reviewId}`} 
                className='review_read-more'
            >
                read more
            </a>
        </div>
    </>);
}
