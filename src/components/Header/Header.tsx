import React from 'react';
import './Header.css';

import {HeaderLogo} from './HeaderLogo';
import {HeaderSearch} from './HeaderSearch';
import {HeaderNav} from './HeaderNav';

interface IHeader{
    children?: React.ReactNode;
}

export function Header(props: IHeader){
    return (<>
        <header className='Header'>
            {props.children}
        </header>
    </>);
}

/**
 * @exports Compound components - reexport sun components so they are grouped together
 */
Header.Logo = HeaderLogo;
Header.Search = HeaderSearch;
Header.Nav = HeaderNav;