import React from 'react';
import './LiveAnywhereCard.css';

interface LiveAnywhereCardProps{
    children: React.ReactNode;
}
export function LiveAnywhereCard({children}: LiveAnywhereCardProps){
    return (
        <div className='LiveAnywhereCard'>
            {children}
        </div>
    );
}
