import React from 'react';
import './Header.css';

import {HeaderLogo} from './HeaderLogo';

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

/**
 * @exports Compound components - reexport sun components so they are grouped together
 */
Header.Logo = HeaderLogo;