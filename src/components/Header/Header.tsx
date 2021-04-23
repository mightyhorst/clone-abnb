import React from 'react';
import './HeaderPage.css';

interface IHeaderPage{
    children?: React.ReactNode;
}

export function HeaderPage({children}: IHeaderPage){
    return (<>
        <header className='HeaderPage'>
            {children}
        </header>
    </>);
}