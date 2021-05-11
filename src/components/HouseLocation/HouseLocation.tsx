import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './HouseLocation.css';
import './HouseLocation.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {
    LocationMap,
    Button,
} from '../../uikit';

/**
 * @interface IHouseLocation
 * @description HouseLocation props types
 */
export interface IHouseLocation{
    // children?: React.ReactNode;
}

/**
 * @function HouseLocation
 * @param props - props for children 
 * @returns {HouseLocation}
 */
export function HouseLocation(props: IHouseLocation){
    /**
     * @constant className - build the css classes to add to the HouseLocation
     */
    const className = clsx(
        'HouseLocation',
    );
    return (<>
        <div className={className}>
            <h2>
                Location
            </h2>
            <LocationMap />
            <h3>
                Great Barrier Island, Auckland, New Zealand
            </h3>
            <p>
                The locations are fantastic, howver the property is completely private with 10 acres.
            </p>
            <Button href='#'>
                More about the location
            </Button>  
        </div>
    </>);
}
