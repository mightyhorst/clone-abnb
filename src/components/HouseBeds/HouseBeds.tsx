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
</>);

/**
 * @constant {JSX.Element} bedroomTwo - bedroom two
 */
const bedroomTwo = (<>
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
</>);

/**
 * @constant {JSX.Element} bedroomThree - bedroom three
 */
const bedroomThree = (<>
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
</>);

/**
 * @constant {JSX.Element} bedroomFour - bedroom four
 */
const bedroomFour = (<>
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
</>);

/**
 * @constant {JSX.Element} bedroomFive - bedroom five
 */
const bedroomFive = (<>
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
            <CardCarousel>
                {bedroomOne}
                {bedroomTwo}
                {bedroomThree}
                {bedroomFour}
                {bedroomFive}
            </CardCarousel>
        </div>
    </>);
}
