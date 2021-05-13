import React from 'react';

import './CardIcon.css';

interface CardIconProps{
    children: React.ReactNode;
}
export function CardIcon({children}: CardIconProps){
    return (<>
        <div>{children}</div>
    </>);
}