import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseDetails.css';
import './HouseDetails.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseDetails
 * @description HouseDetails props types
 */
export interface IHouseDetails{
    children?: React.ReactNode;
}

/**
 * @function HouseDetails
 * @param props - props for children 
 * @returns {HouseDetails}
 */
export function HouseDetails({children}: IHouseDetails){
    /**
     * @constant className - build the css classes to add to the HouseDetails
     */
    const className = clsx(
        'HouseDetails',
    );
    return (<>
        <div className='house-detail'>
            <div className='house-detail-content'>
                <p>
                    The property was settled in the 1860's by the Sanderson family & the homestead built in 1905.
                </p>
                <p>    
                    It has it's very own beach, with streams and a historic Maori Pa site which was in constant use before the 'Treaty of Waitangi'. The house was modernised in the 1990's and has been recently upgraded. It's right on the beach and enjoys all day sun. There's a caretaker who will open up the house and ensure all is running well prior to your stay (and is contactable during your stay).
                </p>
                <div className='show-detail-btn'>
                <a href='#'>Show more <i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        
        </div>
    </>);
}
