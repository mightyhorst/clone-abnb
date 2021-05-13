import React from 'react';

import './CardTitle.css';

interface CardTitleProps{
    children: React.ReactNode;
}
export function CardTitle({children}: CardTitleProps){
    return (<>
        <h4>{children}</h4>
    </>);
}