import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ImageProfile.css';
import './ImageProfile.responsive.css';

/**
 * @requires Components
 */
import {SuperHostSvg} from './SuperHostSvg';

/**
 * @interface IImageProfile
 * @description ImageProfile props types
 */
export interface IImageProfile{
}

/**
 * @function ImageProfile
 * @param props - props for children 
 * @returns {ImageProfile}
 */
export function ImageProfile({}: IImageProfile){
    return (<>
        <div className='ImageProfile'>
            <img src="/img/profile.jpg" alt=""/>
            <SuperHostSvg />
        </div>
    </>);
}
