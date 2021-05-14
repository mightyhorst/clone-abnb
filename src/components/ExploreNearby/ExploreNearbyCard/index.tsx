import React from 'react';
import './ExploreNearbyCard.css';

interface ExploreNearbyCardProps{
    imgSrc: string;
    title: string;
    driveTime: number;
}
export function ExploreNearbyCard({
    imgSrc,
    title,
    driveTime,
}: ExploreNearbyCardProps){
    return (
        <div className='ExploreNearbyCard'>
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

interface ExploreNearbyCardListProps{
    children: React.ReactNode;
}
export function ExploreNearbyCardList({children}: ExploreNearbyCardListProps){
    return (
        <div className='ExploreNearbyCardList explore-nearby__card-list'>
            {children}
        </div>
    );
}

/**
 * @exports ExploreNearbyCard compounds
 */
ExploreNearbyCard.List = ExploreNearbyCardList;
