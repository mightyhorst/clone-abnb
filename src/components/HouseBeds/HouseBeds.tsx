import React from "react";

/**
 * @requires Styles
 */
import "./HouseBeds.css";
import "./HouseBeds.responsive.css";

/**
 * @requires Components
 */
import { CardCarousel, CardSimple, Icon } from "../../uikit";

/**
 * @interface IHouseBeds
 * @description HouseBeds props types
 */
export interface IHouseBeds {
  children?: React.ReactNode;
}

/**
 * @constant {JSX.Element} bedroomOne - bedroom one
 */
const bedroomOne = (
  <>
    <CardSimple>
      <CardSimple.Icon>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
        </svg>
      </CardSimple.Icon>
      <CardSimple.Title>Bedroom 1</CardSimple.Title>
      <CardSimple.Body>1 queen bed</CardSimple.Body>
    </CardSimple>
  </>
);

/**
 * @constant {JSX.Element} bedroomTwo - bedroom two
 */
const bedroomTwo = (
  <>
    <CardSimple>
      <CardSimple.Icon>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
        </svg>
      </CardSimple.Icon>
      <CardSimple.Title>Bedroom 2</CardSimple.Title>
      <CardSimple.Body>1 double bed, 2 single beds</CardSimple.Body>
    </CardSimple>
  </>
);

/**
 * @constant {JSX.Element} bedroomThree - bedroom three
 */
const bedroomThree = (
  <>
    <CardSimple>
      <CardSimple.Icon>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 4a2 2 0 0 1 1.995 1.85L26 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H6v2H4v-9.675a3 3 0 0 1 .087-.717l.067-.232L6 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L8 4zm2 18H6v4h20zm-1.388-6H7.387l-1.333 4h19.891zM24 6H8v8h3v-4a2 2 0 0 1 1.85-1.995L13 8h6a2 2 0 0 1 1.995 1.85L21 10v4h3zm-5 4h-6v4h6z"></path>
        </svg>
      </CardSimple.Icon>
      <CardSimple.Title>Common Spaces</CardSimple.Title>
      <CardSimple.Body>1 sofa bed</CardSimple.Body>
    </CardSimple>
  </>
);

/**
 * @constant {JSX.Element} bedroomFour - bedroom four
 */
const bedroomFour = (
  <>
    <CardSimple>
      <CardSimple.Icon>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 4a2 2 0 0 1 1.995 1.85L26 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H6v2H4v-9.675a3 3 0 0 1 .087-.717l.067-.232L6 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L8 4zm2 18H6v4h20zm-1.388-6H7.387l-1.333 4h19.891zM24 6H8v8h3v-4a2 2 0 0 1 1.85-1.995L13 8h6a2 2 0 0 1 1.995 1.85L21 10v4h3zm-5 4h-6v4h6z"></path>
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 4a2 2 0 0 1 1.995 1.85L26 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H6v2H4v-9.675a3 3 0 0 1 .087-.717l.067-.232L6 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L8 4zm2 18H6v4h20zm-1.388-6H7.387l-1.333 4h19.891zM24 6H8v8h3v-4a2 2 0 0 1 1.85-1.995L13 8h6a2 2 0 0 1 1.995 1.85L21 10v4h3zm-5 4h-6v4h6z"></path>
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 4a2 2 0 0 1 1.995 1.85L26 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H6v2H4v-9.675a3 3 0 0 1 .087-.717l.067-.232L6 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L8 4zm2 18H6v4h20zm-1.388-6H7.387l-1.333 4h19.891zM24 6H8v8h3v-4a2 2 0 0 1 1.85-1.995L13 8h6a2 2 0 0 1 1.995 1.85L21 10v4h3zm-5 4h-6v4h6z"></path>
        </svg>
      </CardSimple.Icon>
      <CardSimple.Title>Common Spaces</CardSimple.Title>
      <CardSimple.Body>1 sofa bed</CardSimple.Body>
    </CardSimple>
  </>
);

/**
 * @constant {JSX.Element} bedroomFive - bedroom five
 */
const bedroomFive = (
  <>
    <CardSimple>
      <CardSimple.Icon>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M24 4a2 2 0 0 1 1.995 1.85L26 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H6v2H4v-9.675a3 3 0 0 1 .087-.717l.067-.232L6 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L8 4zm2 18H6v4h20zm-1.388-6H7.387l-1.333 4h19.891zM24 6H8v8h3v-4a2 2 0 0 1 1.85-1.995L13 8h6a2 2 0 0 1 1.995 1.85L21 10v4h3zm-5 4h-6v4h6z"></path>
        </svg>
      </CardSimple.Icon>
      <CardSimple.Title>King bed</CardSimple.Title>
      <CardSimple.Body>1 king bed, 1 sofa couch</CardSimple.Body>
    </CardSimple>
  </>
);

/**
 * @function HouseBeds
 * @param props - props for children
 * @returns {HouseBeds}
 */
export function HouseBeds({ children }: IHouseBeds) {
  return (
    <>
      <div className={"HouseBeds"}>
        <h2>Places for sleeping</h2>
        <CardCarousel>
          {bedroomOne}
          {bedroomTwo}
          {bedroomThree}
          {bedroomFour}
          {bedroomFive}
        </CardCarousel>
      </div>
    </>
  );
}
