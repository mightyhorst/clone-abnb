import React from 'react';
import './HeaderNavMenuItem.css';
import clsx from 'clsx';

interface IHeaderNavMenuItem{
    children?: React.ReactNode;
    isBold?: boolean;
    hasNotifications?: boolean;
    isDivider?: boolean;
}

export function HeaderNavMenuItem(props: IHeaderNavMenuItem){
    
    /**
     * @constant className
     *  This will build a string of class names
     *  - it always has 'HeaderNavMenuItem'
     *  - if props.isBold is true, it will apply "isBold" classname
     *  - if props.hasNotifications is true, it will apply "hasNotifcations" classname
     *  - if props.isDivider is true, it will apply "isDivider" classname
     */
    const className = clsx(
        'HeaderNavMenuItem',
        {
            // className: true/false
            isBold: props.isBold,
            hasNotifications: props.hasNotifications,
            isDivider: props.isDivider, 
        }
    );

    return (<>
        <li className={className}>
            {!props.isDivider && props.children}
        </li>
    </>);
}
