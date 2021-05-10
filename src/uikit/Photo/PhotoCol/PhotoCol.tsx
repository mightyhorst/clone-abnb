import React from 'react';
import './PhotoCol.css';
interface PhotoColProps{
    children: React.ReactNode;
}
export function PhotoCol({children}: PhotoColProps){
    return (<>
        <aside className='PhotoCol'>
            {children}
        </aside>
    </>);
}
