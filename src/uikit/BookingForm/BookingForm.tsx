import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./BookingForm.css";
import "./BookingForm.responsive.css";

/**
 * @requires Components
 */
import { Icon, Button, Row, Column as Col, DropDown } from "../../uikit";
// import {} from '.';

/**
 * @interface IBookingForm
 * @description BookingForm props types
 */
export interface IBookingForm {
  children?: React.ReactNode;
}

/**
 * @function BookingForm
 * @param props - props for children
 * @returns {BookingForm}
 */
export function BookingForm({ children }: IBookingForm) {
  return (
    <>
      <div className="booking-form-container">
        <div className="BookingForm">
          <div className="booking-form-body">
            <div className="booking-form-content-section">
              <header className="booking-form__header">
                <div className="booking-form__header-price">$269 / night</div>
                <div className="booking-form__header-reviews">
                  <i className="fa fa-star checked"></i>
                  <strong>4.97</strong>
                  <span>
                    (<a href="#/reviews">36 reviews</a>)
                  </span>
                </div>
              </header>
              <form action="#" className="booking-form__form">
                <fieldset>
                  <Row>
                    <Col.Half>
                      <label htmlFor="booking-form__checkin">
                        <input
                          id="booking-form__checkin"
                          type="text"
                          placeholder="Add date"
                        />
                      </label>
                    </Col.Half>
                    <Col.Half>
                      <label htmlFor="booking-form__checkout">
                        <input
                          id="booking-form__checkout"
                          type="text"
                          placeholder="Add date"
                        />
                      </label>
                    </Col.Half>
                  </Row>
                  <Row>
                    <Col>
                      <label htmlFor="booking-form__guests">
                        <select id="booking-form__guests" defaultValue="1">
                          <option value="1">1 guest</option>
                          <option value="2">2 guests</option>
                          <option value="3">3 guests</option>
                        </select>
                        <i className="fa fa-chevron-down"></i>
                      </label>
                    </Col>
                  </Row>
                </fieldset>
                <Button variant="primary">Check availability</Button>
              </form>
            </div>
            <div className="booking-from-footer">
              <p>
                Enter dates and number of guests to check the total trip price,
                including additional fees and any taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
