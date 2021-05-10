import React from 'react';
import './PhotoContainer.css';
interface PhotoContainerProps{
    children: React.ReactNode;
}
export function PhotoContainer({children}: PhotoContainerProps){
    return (<>
        <section>
            {children}
        </section>
    </>);
}
