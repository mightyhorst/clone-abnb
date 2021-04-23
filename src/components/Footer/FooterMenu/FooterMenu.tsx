import React from 'react';
import './FooterMenu.css';

import {FooterMenuItem} from './FooterMenuItem';

interface IFooterMenu{
    children: React.ReactNode;
    title: string;
}
export function FooterMenu(props: IFooterMenu){
    return (<>
        <aside className='FooterMenu'>
            <h3>
                {props.title}
            </h3>
            <ul>
                {props.children}
            </ul>
        </aside>
    </>);
}

/**
 * @exports Compound components
 */
FooterMenu.Item = FooterMenuItem;
