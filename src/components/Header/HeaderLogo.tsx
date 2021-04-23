import React from 'react';
import './HeaderLogo.css';

interface IHeaderLogo{
    children?: React.ReactNode;
}

export function HeaderLogo({children}: IHeaderLogo){
    return (<>
        <div className='HeaderLogo'>
            {children}
        </div>
    </>);
}
