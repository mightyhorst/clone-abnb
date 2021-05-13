import React from 'react';

/**
 * @requires Styles
 */
import './HouseBeds.css';
import './HouseBeds.responsive.css';

/**
 * @requires Components
 */
import {
    CardCarousel,
    CardSimple,
    Icon,
} from '../../uikit';

/**
 * @interface IHouseBeds
 * @description HouseBeds props types
 */
export interface IHouseBeds{
    children?: React.ReactNode;
}

/**
 * @constant {JSX.Element} bedroomOne - bedroom one
 */
const bedroomOne = (<>
    <CardCarousel>
        <CardSimple>
            <CardSimple.Icon>
                <Icon.Bed></Icon.Bed>
            </CardSimple.Icon>
            <CardSimple.Title>
                Bedroom 1
            </CardSimple.Title>
            <CardSimple.Body>
                1 queen bed
            </CardSimple.Body>
        </CardSimple>
    </CardCarousel>
</>);

/**
 * @constant {JSX.Element} bedroomTwo - bedroom two
 */
const bedroomTwo = (<>
    <CardCarousel>
        <CardSimple>
            <CardSimple.Icon>
                <Icon.Bed></Icon.Bed>
                <Icon.SingleBed></Icon.SingleBed>
                <Icon.SingleBed></Icon.SingleBed>
            </CardSimple.Icon>
            <CardSimple.Title>
                Bedroom 2
            </CardSimple.Title>
            <CardSimple.Body>
                1 double bed, 2 single beds
            </CardSimple.Body>
        </CardSimple>
    </CardCarousel>
</>);

/**
 * @constant {JSX.Element} bedroomThree - bedroom three
 */
const bedroomThree = (<>
    <CardCarousel>
        <CardSimple>
            <CardSimple.Icon>
                <Icon.Sofa></Icon.Sofa>
            </CardSimple.Icon>
            <CardSimple.Title>
                Common Spaces
            </CardSimple.Title>
            <CardSimple.Body>
                1 sofa bed
            </CardSimple.Body>
        </CardSimple>
    </CardCarousel>
</>);

/**
 * @constant {JSX.Element} bedroomFour - bedroom four
 */
const bedroomFour = (<>
    <CardCarousel>
        <CardSimple>
            <CardSimple.Icon>
                <Icon.Bed></Icon.Bed>
                <Icon.Bed></Icon.Bed>
                <Icon.Bed></Icon.Bed>
            </CardSimple.Icon>
            <CardSimple.Title>
                Common Spaces
            </CardSimple.Title>
            <CardSimple.Body>
                1 sofa bed
            </CardSimple.Body>
        </CardSimple>
    </CardCarousel>
</>);

/**
 * @constant {JSX.Element} bedroomFive - bedroom five
 */
const bedroomFive = (<>
    <CardCarousel>
        <CardSimple>
            <CardSimple.Icon>
                <Icon.Bed></Icon.Bed>
                <Icon.Bed></Icon.Bed>
                <Icon.Bed></Icon.Bed>
            </CardSimple.Icon>
            <CardSimple.Title>
                King bed
            </CardSimple.Title>
            <CardSimple.Body>
                1 king bed, 1 sofa couch
            </CardSimple.Body>
        </CardSimple>
    </CardCarousel>
</>);

/**
 * @function HouseBeds
 * @param props - props for children 
 * @returns {HouseBeds}
 */
export function HouseBeds({children}: IHouseBeds){
    return (<>
        <div className={'HouseBeds'}>
            <h2>
                Sleeping arrangements
            </h2>
            {bedroomOne}
            {bedroomTwo}
            {bedroomThree}
            {bedroomFour}
            {bedroomFive}
        </div>
    </>);
}
