import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./ThingsToKnow.css";
import "./ThingsToKnow.responsive.css";

/**
 * @requires Components
 */
import { ThingsToKnowRow } from "./ThingsToKnowRow";
import { ThingsToKnowCol } from "./ThingsToKnowCol";
import {} from "../../uikit";

/**
 * @interface IThingsToKnow
 * @description ThingsToKnow props types
 */
export interface IThingsToKnow {
  children?: React.ReactNode;
}

/**
 * @function ThingsToKnow
 * @param props - props for children
 * @returns {ThingsToKnow}
 */
export function ThingsToKnow({ children }: IThingsToKnow) {
  return (
    <>
      <div className="ThingsToKnow">
        <h2> Things to know </h2>
        <ThingsToKnowRow>
          <ThingsToKnowCol>
            <h3>House rules</h3>
            <ul>
              <li>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm7.895 22.954l-9.526-5.5a1.5 1.5 0 0 1-.743-1.154l-.007-.145v-11h3V16.29l8.776 5.067-1.5 2.598z"></path>
                </svg>
                <span>Check in flexible</span>
              </li>
            </ul>
            <a href="#">
              <span>Show All</span>
              <i className="fa fa-chevron-right"></i>
            </a>
          </ThingsToKnowCol>
          <ThingsToKnowCol>
            <h3>Health &amp; Safety</h3>
            <ul>
              <li>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm7.895 22.954l-9.526-5.5a1.5 1.5 0 0 1-.743-1.154l-.007-.145v-11h3V16.29l8.776 5.067-1.5 2.598z"></path>
                </svg>
                <span>Commited to AirBnB's enhanced</span>
              </li>
            </ul>
            <a href="#">
              <span>Show All</span>
              <i className="fa fa-chevron-right"></i>
            </a>
          </ThingsToKnowCol>
          <ThingsToKnowCol>
            <h3>Cancellation Policy</h3>
            <p>Add your trip dates</p>
            <a href="#">
              <span>Add Dates</span>
              <i className="fa fa-chevron-right"></i>
            </a>
          </ThingsToKnowCol>
        </ThingsToKnowRow>
      </div>
    </>
  );
}
