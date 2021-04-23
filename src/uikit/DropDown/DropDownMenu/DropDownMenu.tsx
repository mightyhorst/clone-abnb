import React from 'react';
import './DropDownMenu.css';

interface IDropDownMenu{
    children?: React.ReactNode;
}

export function DropDownMenu({children}: IDropDownMenu){
    return (<>
        <ul className='DropDownMenu'>
            {children}
        </ul>
    </>);
}
