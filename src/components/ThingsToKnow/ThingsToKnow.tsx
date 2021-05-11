import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ThingsToKnow.css';
import './ThingsToKnow.responsive.css';

/**
 * @requires Components
 */
import {ThingsToKnowRow} from './ThingsToKnowRow';
import {ThingsToKnowCol} from './ThingsToKnowCol';
import {} from '../../uikit';

/**
 * @interface IThingsToKnow
 * @description ThingsToKnow props types
 */
export interface IThingsToKnow{
    children?: React.ReactNode;
}

/**
 * @function ThingsToKnow
 * @param props - props for children 
 * @returns {ThingsToKnow}
 */
export function ThingsToKnow({children}: IThingsToKnow){
    return (<>
        <div className='ThingsToKnow'>
            <h2> Things to know </h2>
            <ThingsToKnowRow>
                <ThingsToKnowCol>
                    <h3>
                        House rules
                    </h3>
                    <ul>
                        <li>
                            <i className="fa fa-clock"></i>
                            <span>
                                Check in flexible
                            </span>
                        </li>
                    </ul>
                    <a href="#">
                        <span>
                            Show All
                        </span>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </ThingsToKnowCol>
                <ThingsToKnowCol>
                    <h3>
                        Health &amp; Safety
                    </h3>
                    <ul>
                        <li>
                            <i className="fa fa-stars"></i>
                            <span>
                                Commited to AirBnB's enhanced
                            </span>
                        </li>
                    </ul>
                    <a href="#">
                        <span>
                            Show All
                        </span>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </ThingsToKnowCol>
                <ThingsToKnowCol>
                    <h3>
                        Cancellation Policy
                    </h3>
                    <p>
                        Add your trip dates
                    </p>
                    <a href="#">
                        <span>
                            Add Dates
                        </span>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </ThingsToKnowCol>
            </ThingsToKnowRow>
        </div>
    </>);
}
