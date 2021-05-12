import React from 'react';
import clsx from 'clsx';

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
                </Col.Half>
                <Col.Half>
                </Col.Half>
            </Row>
        </section>
    </>);
}
