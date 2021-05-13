import React from 'react';

/**
 * @requires Styles
 */
import './HouseReviews.css';
import './HouseReviews.responsive.css';

/**
 * @requires Components
 */
import {} from '../../components';
import {
    Review,
    Rating,
    Row,
    Column as Col,
    Button, 
    Icon,
} from '../../uikit';

/**
 * @interface IHouseReviews
 * @description HouseReviews props types
 */
export interface IHouseReviews{
    children?: React.ReactNode;
}

/**
 * @function HouseReviews
 * @param props - props for children 
 * @returns {HouseReviews}
 */
export function HouseReviews({children}: IHouseReviews){
    return (<>
        <section className='HouseReviews'>
            <div className="house-reviews__summary">
                <Icon.Star />
                <div className="house-reviews__total-rating">
                    4.97
                </div>
                <div className="house-reviews__total-reviews">
                    (36 reviews)
                </div>
            </div>
            <Row addClass='house-reviews__ratings'>
                <Col.Half>
                    <Rating 
                        label='Cleanliness'
                        rating={4.9}
                        total={5}
                    />
                </Col.Half>
                <Col.Half>
                </Col.Half>
            </Row>
            <Row addClass='house-reviews__reviews'>
                <Col.Half>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                </Col.Half>
                <Col.Half>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                    <Review 
                        profileImg='/img/profile.jpg'
                        profileName='Kara'
                        datePublished='April 2021'
                        reviewId='100'
                    >
                        Idyllic spot, perfect for an old style Kiwi holiday, with your own private beach! We enjoyed kayaking, swimming, walking to the wharf and across the property to waterfalls and arou… 
                    </Review>
                </Col.Half>
            </Row>
            <div className="house-reviews__show-all-reviews">
                <Button>
                    Show all 36 Reviews
                </Button>
            </div>
        </section>
    </>);
}
