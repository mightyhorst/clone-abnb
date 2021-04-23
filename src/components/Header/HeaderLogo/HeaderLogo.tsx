import React from 'react';
import './HeaderLogo.css';

interface IHeaderLogo{
    // children?: React.ReactNode;
}

export function HeaderLogo(props: IHeaderLogo){
    return (<>
        <div className='HeaderLogo'>
            Header SVG goes here
        </div>
    </>);
}
