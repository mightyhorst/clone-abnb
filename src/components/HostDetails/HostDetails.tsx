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
import {
    Icon,
    Row,
    Column as Col,
    Button,
} from '../../uikit';
import {ProtectionSvg} from './ProtectionSvg';

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
            
            <Row>
                <Col.Half>
                    <ul className="host-details__rewards">
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
                    <h4>
                        During your stay
                    </h4>
                    <p>
                        There is a caretaker who will open up the house and ensure all is running well prior to your stay. They will also be contactable during your time at the homestead, should you require any assistance.
                    </p>
                    <h4>
                        Paul is a Superhost
                    </h4>
                    <p>
                        Superhosts are experienced, highly-rated hosts who are committed to providing great stays for guests.
                    </p>
                </Col.Half>
                <Col.Half>
                    <ul className="host-details__stats">
                        <li>
                            Language: English
                        </li>
                        <li>
                            Response rate: 100%    
                        </li>
                        <li>
                            Response time: within a day
                        </li>
                    </ul>
                    <Button href='#'>
                        Contact Host
                    </Button>
                    <div className="host-details__protection">
                        <ProtectionSvg />
                        <p>
                            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                        </p>
                    </div>
                </Col.Half>
            </Row>
        </section>
    </>);
}
