import React from 'react';

/**
 * @requires Styles
 */
import './HouseHeader.css';
import './HouseHeader.responsive.css';

/**
 * @requires Components
 */
import {
    ImageProfile,
} from '../../uikit';

/**
 * @interface IHouseHeader
 * @description HouseHeader props types
 */
export interface IHouseHeader{
}

/**
 * @function HouseHeader
 * @param props - props for children 
 * @returns {HouseHeader}
 */
export function HouseHeader({}: IHouseHeader){
    return (<>
        <div className='HouseHeader'>
            <div className="house-header__details">
                <h2>
                    Entire house hosted by Paul
                </h2>
                <ul className="home-header__subtitle">
                    <li>
                        6 guests
                    </li>
                    <li>
                        3 bedrooms
                    </li>
                    <li>
                        5 beds
                    </li>
                    <li>
                        1 bath
                    </li>
                </ul>
            </div>
            <div className="house-header__profile">
                <ImageProfile />
            </div>
        </div>
    </>);
}
