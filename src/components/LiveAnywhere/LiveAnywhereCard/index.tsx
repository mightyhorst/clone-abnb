import React from 'react';
import './LiveAnywhereCard.css';

interface LiveAnywhereCardProps{
    imgSrc: string;
    title: string;
}
export function LiveAnywhereCard({
    imgSrc,
    title,
}: LiveAnywhereCardProps){
    return (
        <div className='LiveAnywhereCard'>
            <img 
                className='live-anywhere__img'
                src={imgSrc} 
                alt="explore nearby" 
            />
            <div className="live-anywhere__card-details">
                <strong>
                    {title}
                </strong>
            </div>
        </div>
    );
}

interface LiveAnywhereCardListProps{
    children: React.ReactNode;
}
export function LiveAnywhereCardList({children}: LiveAnywhereCardListProps){
    return (
        <div className='LiveAnywhereCardList live-anywhere__card-list'>
            {children}
        </div>
    );
}

/**
 * @exports LiveAnywhereCard compounds
 */
LiveAnywhereCard.List = LiveAnywhereCardList;
