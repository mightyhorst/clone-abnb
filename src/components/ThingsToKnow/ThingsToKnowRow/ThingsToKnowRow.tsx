import React from 'react';

import'./ThingsToKnowRow.css';

export interface ThingsToKnowRowProps{
    children: React.ReactNode;
}
export function ThingsToKnowRow({children}: ThingsToKnowRowProps){
    return (<>
        <section className='ThingsToKnowRow'>
            {children}
        </section>
    </>);
}
