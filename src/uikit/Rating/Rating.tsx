import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './Rating.css';
import './Rating.responsive.css';

/**
 * @requires Components
 */
import {} from '../../components';
import {} from '../../uikit';

/**
 * @interface IRating
 * @description Rating props types
 */
export interface IRating{
    label: string;
    rating: number;
    total?: number;
}

/**
 * @function Rating
 * @param props - props for children 
 * @returns {Rating}
 */
export function Rating({
    label,
    rating,
    total = 5,
}: IRating){
    const width = 100 * rating/total;
    return (<>
        <div className={'Rating'}>
            <span className='rating__label'>
                {label}
            </span>
            <div className='rating__val'>
                <div className="rating__bar">
                    <div 
                        className="rating__bar-inner"
                        style={{
                            width: `${width}%`,
                        }}
                    />
                </div>
                <strong>
                    {rating}
                </strong>
            </div>
        </div>
    </>);
}
