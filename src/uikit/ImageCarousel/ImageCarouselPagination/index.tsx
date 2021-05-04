import React, {useState} from 'react';

import './ImageCarouselPagination.css';

export interface IImageCarouselPagination{
    pages: number;
    activePage?: number;
}
export function ImageCarouselPagination(props: IImageCarouselPagination){
    const [activePage, setActivePage] = useState(props.activePage || 0);
    const onClickHandler = (index: number) => {
        setActivePage(index);
    };
    return (<>
        <nav className='ImageCarouselPagination image-carousel-pagination'>
            {Array.from(Array(props.pages)).map((page, index) => (
                <button 
                    className={activePage === index ?  'isActive' : ''}
                    onClick={(e)=>onClickHandler(index)}
                />
            ))}
        </nav>
    </>);
}