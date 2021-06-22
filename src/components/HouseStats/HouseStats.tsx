import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseStats.css';
import './HouseStats.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IHouseStats
 * @description HouseStats props types
 */
export interface IHouseStats{
    children?: React.ReactNode;
}

/**
 * @function HouseStats
 * @param props - props for children 
 * @returns {HouseStats}
 */
export function HouseStats({children}: IHouseStats){
    /**
     * @constant className - build the css classes to add to the HouseStats
     */
    const className = clsx(
        'HouseStats',
    );
    return (<>
        <div className='house-stats'>
            <div className='house-stats-details-section'>
                <div className='house-stats-details'>
                    <div className='house-stats-icon'>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false">
                            <path d="m17.9772237 1.90551573.1439807.13496509 13.2525 13.25240998-1.4142088 1.4142184-.9603513-.9603098.0008557 12.5832006c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-22c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623-.00085571-12.5822006-.95878858.9593098-1.41421142-1.414217 13.25247161-13.25243161c1.1247615-1.1246896 2.9202989-1.16967718 4.0986078-.13494486zm-2.5902053 1.46599297-.0942127.08318915-10.29366141 10.29310155.00085571 14.5822006h5.9991443l.0008557-9.9966c0-1.0543764.8158639-1.9181664 1.8507358-1.9945144l.1492642-.0054856h6c1.0543764 0 1.9181664.8158639 1.9945144 1.8507358l.0054856.1492642-.0008557 9.9966h6.0008557l-.0008557-14.5832006-10.2921737-10.29212525c-.3604413-.36046438-.9276436-.38819241-1.3199522-.08316545zm3.6129816 14.9618913h-6l-.0008557 9.9963994h6z"></path>
                        </svg>
                    </div>
                    <div className='house-stats-content'>
                        <h5>Entire home</h5>
                        <span>You’ll have the house to yourself.</span>
                    </div>
                </div>
                <div className='house-stats-details'>
                    <div className='house-stats-icon'>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false">
                            <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path>
                        </svg>
                    </div>
                    <div className='house-stats-content'>
                        <h5>Enhanced Clean</h5>
                        <span>This host committed to Airbnb's 5-step enhanced cleaning process.</span>
                    </div>
                </div>
                <div className='house-stats-details'>
                    <div className='house-stats-icon'>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false">
                            <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
                        </svg>
                    </div>
                    <div className='house-stats-content'>
                        <h5>Paul is a Superhost</h5>
                        <span>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
                    </div>
                </div>
                <div className='house-stats-details'>
                    <div className='house-stats-icon'>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false">
                            <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                        </svg>
                    </div>
                    <div className='house-stats-content'>
                        <h5>Great location</h5>
                        <span>94% of recent guests gave the location a 5-star rating.</span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
