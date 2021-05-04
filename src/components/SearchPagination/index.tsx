import React from 'react';

import './SearchPagination.css';

export interface ISearchPagination{
    pages: number;
    activePage?: number;
}
export function SearchPagination({pages, activePage = 0}: ISearchPagination){
    return (<>
        <nav className='SearchPagination'>
            <button className='pagination__left isInactive'>
                {/* Icon.Left */}
                <i className="fa fa-chevron-left"></i>
            </button>
            <ul className='pagination__ul'>
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
            <button className='pagination__right'>
                {/* Icon.Right */}
                <i className="fa fa-chevron-right"></i>
            </button>
            <p className='center'>
                1 - 20 of 300+ places to stay
            </p>
        </nav>
    </>);
}