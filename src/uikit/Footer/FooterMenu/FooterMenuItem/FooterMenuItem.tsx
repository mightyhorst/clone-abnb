import React from 'react';
import './FooterMenuItem.css';

interface IFooterMenuItem{
    children: React.ReactNode;
    href: string;
}
export function FooterMenuItem(props: IFooterMenuItem){
    return (<>
        <li className='FooterMenuItem'>
            <a href={props.href}>
                {props.children}
            </a>
        </li>
    </>);
}
