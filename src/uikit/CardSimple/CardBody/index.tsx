import React from 'react';

import './CardBody.css';

interface CardBodyProps{
    children: React.ReactNode;
}
export function CardBody({children}: CardBodyProps){
    return (<>
        <p>{children}</p>
    </>);
}