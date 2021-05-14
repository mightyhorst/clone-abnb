import React from 'react';
import './LiveAnywhereCard.css';

interface LiveAnywhereCardProps{
    imgSrc: string;
    title: string;
    driveTime: number;
}
export function LiveAnywhereCard({
    imgSrc,
    title,
    driveTime,
}: LiveAnywhereCardProps){
    return (
        <div className='LiveAnywhereCard'>
            <img 
                className='explore-nearby__img'
                src={imgSrc} 
                alt="explore nearby" 
            />
            <div className="explore-nearby__card-details">
                <strong>
                    {title}
                </strong>
                <p>
                    {driveTime} drive time
                </p>
            </div>
        </div>
    );
}

interface LiveAnywhereCardListProps{
    children: React.ReactNode;
}
export function LiveAnywhereCardList({children}: LiveAnywhereCardListProps){
    return (
        <div className='LiveAnywhereCardList explore-nearby__card-list'>
            {children}
        </div>
    );
}

/**
 * @exports LiveAnywhereCard compounds
 */
LiveAnywhereCard.List = LiveAnywhereCardList;
