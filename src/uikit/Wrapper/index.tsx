import React from 'react';

/**
 * @requires Styles
 */
import './Wrapper.css';
import './Wrapper.responsive.css';

interface WrapperProps{
    children: React.ReactNode;
}
export function Wrapper({children}: WrapperProps){
    return (
        <section className='Wrapper'>
            {children}
        </section>
    );
}