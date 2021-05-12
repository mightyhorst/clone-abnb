import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseAmenities.css';
import './HouseAmenities.responsive.css';

/**
 * @requires Components
 */
import {
    Icon,
} from '../../uikit';
import {} from '.';

/**
 * @interface IHouseAmenities
 * @description HouseAmenities props types
 */
export interface IHouseAmenities{
    children?: React.ReactNode;
}

/**
 * @function HouseAmenities
 * @param props - props for children 
 * @returns {HouseAmenities}
 */
export function HouseAmenities({children}: IHouseAmenities){
    return (<>
        <div className='HouseAmenities'>
            <h2>
                Amenities
            </h2>
            <div className="house-amenities__list">
                <ul>
                    <li>
                        <Icon.Kitchen />
                        <span>
                            Kitchen
                        </span>
                    </li>
                    <li>
                        <Icon.Fireplace />
                        <span>
                            Fireplace
                        </span>
                    </li>
                    <li>
                        <Icon.Essentials />
                        <span>
                            Essentials
                        </span>
                    </li>
                    <li>
                        <Icon.Heating />
                        <span>
                            Heating
                        </span>
                    </li>
                    <li>
                        <Icon.FirstAid />
                        <span>
                            First aid kit
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Icon.Parking />
                        <span>
                            Free parking on premise
                        </span>
                    </li>
                    <li>
                        <Icon.Washing />
                        <span>
                            Washing machine
                        </span>
                    </li>
                    <li>
                        <Icon.Hangers />
                        <span>
                            Hangers
                        </span>
                    </li>
                    <li>
                        <Icon.SmokeAlarm />
                        <span>
                            Smoke alarms
                        </span>
                    </li>
                    <li>
                        <Icon.CarbonAlarm />
                        <span className='strikethrough'>
                            Carbon monoxide alarm
                        </span>
                    </li>
                </ul>
            </div> 

        </div>
    </>);
}
