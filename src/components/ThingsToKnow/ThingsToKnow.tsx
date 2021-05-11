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
                </ThingsToKnowCol>
                <ThingsToKnowCol>
                </ThingsToKnowCol>
                <ThingsToKnowCol>
                </ThingsToKnowCol>
            </ThingsToKnowRow>
        </div>
    </>);
}
