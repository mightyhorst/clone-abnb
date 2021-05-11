import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './LocationMap.css';
import './LocationMap.responsive.css';

/**
 * @requires Components
 */
import {Map} from '..';

/**
 * @interface ILocationMap
 * @description LocationMap props types
 */
export interface ILocationMap{
    // children?: React.ReactNode;
    lat?: number;
    lng?: number;
}

/**
 * @function LocationMap
 * @param props - props for children 
 * @returns {LocationMap}
 */
export function LocationMap({lat = 90, lng = 90}: ILocationMap){
    return (<>
        <div className='LocationMap'>
            <Map 
                center={{
                    lat,
                    lng,
                }}
                zoom={1}
            />
        </div>
    </>);
}
