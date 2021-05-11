import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HostDetails.css';
import './HostDetails.responsive.css';

/**
 * @requires Components
 */
import {Icon} from '../../uikit';
// import {} from '.';

/**
 * @interface IHostDetails
 * @description HostDetails props types
 */
export interface IHostDetails{
    // children?: React.ReactNode;
}

/**
 * @function HostDetails
 * @param props - props for children 
 * @returns {HostDetails}
 */
export function HostDetails(props: IHostDetails){
    return (<>
        <section className='HostDetails'>
            <header>
                <div className="host-details__profile">
                    <img src="/img/profile.jpg" alt="profile" />
                </div>
                <div className="host-details__title">
                    <h2>
                        Hosted by Paul
                    </h2>
                    <sub>
                        Joined in May 2016
                    </sub>
                </div>
            </header>
            <ul className="host-details__stats">
                <li>
                    <Icon.Star />
                    <a href='#'>
                        39 Reviews
                    </a>
                </li>
                <li>
                    <Icon.Verified />
                    <a href='#'>
                        Identity verifed
                    </a>
                </li>
                <li>
                    <Icon.Medal />
                    <a href='#'>
                        Superhost
                    </a>
                </li>
            </ul>
        </section>
    </>);
}
