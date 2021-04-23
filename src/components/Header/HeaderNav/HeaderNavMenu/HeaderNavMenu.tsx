import React from 'react';
import './HeaderNavMenu.css';

interface IHeaderNavMenu{
    children?: React.ReactNode;
}

export function HeaderNavMenu({children}: IHeaderNavMenu){
    return (<>
        <ul className='HeaderNavMenu'>
            {children}
        </ul>
    </>);
}
