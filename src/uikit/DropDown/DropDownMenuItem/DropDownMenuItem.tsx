import React from 'react';
import './DropDownMenuItem.css';
import clsx from 'clsx';

interface IDropDownMenuItem{
    children?: React.ReactNode;
    isBold?: boolean;
    hasNotifications?: boolean;
    isDivider?: boolean;
    href?: string;
}

export function DropDownMenuItem(props: IDropDownMenuItem){
    
    /**
     * @constant className
     *  This will build a string of class names
     *  - it always has 'DropDownMenuItem'
     *  - if props.isBold is true, it will apply "isBold" classname
     *  - if props.hasNotifications is true, it will apply "hasNotifcations" classname
     *  - if props.isDivider is true, it will apply "isDivider" classname
     */
    const className = clsx(
        'DropDownMenuItem',
        {
            // className: true/false
            isBold: props.isBold,
            hasNotifications: props.hasNotifications,
            isDivider: props.isDivider, 
        }
    );

    return (<>
        <li className={className}>
            {!props.isDivider && props.children && props.href && 
                <a href={props.href}>
                    {props.children}
                </a>
            }
        </li>
    </>);
}
