import React from 'react';
import './Header.css';

interface IHeader{
    children?: React.ReactNode;
}

export function Header({children}: IHeader){
    return (<>
        <header className='Header'>
            {children}
        </header>
    </>);
}