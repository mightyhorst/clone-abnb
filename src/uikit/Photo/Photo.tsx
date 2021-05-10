import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './Photo.css';
import './Photo.responsive.css';

/**
 * @requires Components
 */
import {PhotoContainer} from './PhotoContainer';
import {PhotoCol} from './PhotoCol';

/**
 * @interface IPhoto
 * @description Photo props types
 */
export interface IPhoto{
    children?: React.ReactNode;
}

/**
 * @function Photo
 * @param props - props for children 
 * @returns {Photo}
 */
export function Photo({children}: IPhoto){
    /**
     * @constant className - build the css classes to add to the Photo
     */
    const className = clsx(
        'Photo',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
/**
 * @exports Compound Components
 */
Photo.Container = PhotoContainer;
Photo.Col = PhotoCol;
