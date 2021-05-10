import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DetailsPagePhotos.css';
import './DetailsPagePhotos.responsive.css';

/**
 * @requires Components
 */
import {
    Photo,
} from '../../uikit';

/**
 * @interface IDetailsPagePhotos
 * @description DetailsPagePhotos props types
 */
export interface IDetailsPagePhotos{
    // children?: React.ReactNode;
}

/**
 * @function DetailsPagePhotos
 * @param props - props for children 
 * @returns {DetailsPagePhotos}
 */
export function DetailsPagePhotos(props: IDetailsPagePhotos){
    return (<>
        <Photo.Container>
            <Photo.Col>
                <Photo 
                    variant='featured' 
                    src='/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg'
                    />
            </Photo.Col>
            <Photo.Col>
                <Photo 
                    src='/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg'
                />
                <Photo 
                    src='/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg'
                />
            </Photo.Col>
            <Photo.Col>
                <Photo 
                    src='/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg'
                />
                <Photo 
                    src='/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg'
                />
            </Photo.Col>
        </Photo.Container>
    </>);
}
