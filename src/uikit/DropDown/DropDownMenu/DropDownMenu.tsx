import React from 'react';
import './DropDownMenu.css';
import clsx from 'clsx';

interface IDropDownMenu{
    children?: React.ReactNode;
    isOpen?: boolean;
}

export function DropDownMenu({children, isOpen = true}: IDropDownMenu){
    return (<>
        <ul className={clsx('DropDownMenu', {'isOpen': isOpen})}>
            {children}
        </ul>
    </>);
}
