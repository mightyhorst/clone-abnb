import React from 'react';

import './ImageCarouselPagination.css';

export interface IImageCarouselPagination{
    pages: number;
    activePage?: number;
}
export function ImageCarouselPagination({pages, activePage = 0}: IImageCarouselPagination){
    return (<>
        <nav className='ImageCarouselPagination'>
            <button className='carousel-pagination__left isInactive'>
                {/* Icon.Left */}
                <i className="fa fa-chevron-left"></i>
            </button>
            <ul className='carousel-pagination__ul'>
                <li className='isActive'>
                    1
                </li>
                <li>
                    2 
                </li>
                <li>
                    3 
                </li>
                <li>
                    4
                </li>
                <li>
                    5
                </li>
                <li className='more'>
                    ... 
                </li>
                <li>
                    15 
                </li>
            </ul>
            <button className='carousel-pagination__right'>
                {/* Icon.Right */}
                <i className="fa fa-chevron-right"></i>
            </button>
            <p className='center'>
                1 - 20 of 300+ places to stay
            </p>
        </nav>
    </>);
}