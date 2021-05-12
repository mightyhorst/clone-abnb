import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ExploreOtherOptions.css';
import './ExploreOtherOptions.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface IExploreOtherOptions
 * @description ExploreOtherOptions props types
 */
export interface IExploreOtherOptions{
    children?: React.ReactNode;
}

/**
 * @function ExploreOtherOptions
 * @param props - props for children 
 * @returns {ExploreOtherOptions}
 */
export function ExploreOtherOptions({children}: IExploreOtherOptions){
    return (<>
        <footer className='ExploreOtherOptions'>
            <h2>
                Explore other options in and around Great Barrier Island
            </h2>
            <strong>
                More places to stay in Great Barrier Island:
            </strong>
            <p>
                Apartments · Bed and breakfasts · Lofts · Villas · Condominiums
            </p>
            <ul>
                <li>
                    <a href="#">
                        Waiheke Island
                    </a>
                </li>
                <li>
                    <a href="#">
                        Hamilton
                    </a>
                </li>
                <li>
                    <a href="#">
                        Tauranga
                    </a>
                </li>
                <li>
                    <a href="#">
                        Raglan
                    </a>
                </li>
                <li>
                    <a href="#">
                        Whangārei
                    </a>
                </li>
                <li>
                    <a href="#">
                        Great Barrier Island
                    </a>
                </li>
                <li>
                    <a href="#">
                        Coromandel
                    </a>
                </li>
                <li>
                    <a href="#">
                        Whangamatā
                    </a>
                </li>
                <li>
                    <a href="#">
                        Waihi Beach
                    </a>
                </li>
                <li>
                    <a href="#">
                        Cambridge
                    </a>
                </li>
                <li>
                    <a href="#">
                        Matakana
                    </a>
                </li>
                <li>
                    <a href="#">
                        Whitianga
                    </a>
                </li>
            </ul>
        </footer>
    </>);
}
