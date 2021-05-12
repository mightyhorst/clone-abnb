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
    profileImg: string;
}

/**
 * @function Review
 * @param props - props for children 
 * @returns {Review}
 */
export function Review({
    profileImg='/img/profile.jpg',
}: IReview){
    return (<>
        <div className='Review'>
            <div className="review__header">
                <div className="review__profile-img">
                    <img src={profileImg} alt="profile"/>
                </div>
                <div className="review__profile">
                    <h3> Kara </h3>
                    <h5> April 2021 </h5>
                </div>
            </div>
            <p>
                Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
            </p>
            <a 
                href="#" 
                className='review_read-more'
            >
                read more
            </a>
        </div>
    </>);
}
