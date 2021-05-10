import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DetailsPagePhotos.css';
import './DetailsPagePhotos.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '.';

/**
 * @interface IDetailsPagePhotos
 * @description DetailsPagePhotos props types
 */
export interface IDetailsPagePhotos{
    children?: React.ReactNode;
}

/**
 * @function DetailsPagePhotos
 * @param props - props for children 
 * @returns {DetailsPagePhotos}
 */
export function DetailsPagePhotos({children}: IDetailsPagePhotos){
    /**
     * @constant className - build the css classes to add to the DetailsPagePhotos
     */
    const className = clsx(
        'DetailsPagePhotos',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
