import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./HostDetails.css";
import "./HostDetails.responsive.css";

/**
 * @requires Components
 */
import { Icon, Row, Column as Col, Button } from "../../uikit";
import { ProtectionSvg } from "./ProtectionSvg";

/**
 * @interface IHostDetails
 * @description HostDetails props types
 */
export interface IHostDetails {
  // children?: React.ReactNode;
}

/**
 * @function HostDetails
 * @param props - props for children
 * @returns {HostDetails}
 */
export function HostDetails(props: IHostDetails) {
  return (
    <>
      <section className="HostDetails">
        <header>
          <div className="host-details__profile">
            <img src="/img/profile.jpg" alt="profile" />
            <svg
              viewBox="0 0 14 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              class="SuperHostSvg"
            >
              <path
                d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                fill="#fff"
              ></path>
              <path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"></path>
              <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f"></path>
              <path
                d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                fill="#484848"
              ></path>
            </svg>
          </div>
          <div className="host-details__title">
            <h2>Hosted by Paul</h2>
            <sub>Joined in May 2016</sub>
          </div>
        </header>

        <Row>
          <Col.Half>
            <ul className="host-details__rewards">
              <li>
                <span className="fa fa-star checked"></span>
                <a href="#">39 Reviews</a>
              </li>
              <li>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path>
                </svg>
                <a href="#">Identity verifed</a>
              </li>
              <li>
                <i className="fa fa-heart"></i>
                <a href="#">Superhost</a>
              </li>
            </ul>
            <h4>During your stay</h4>
            <p>
              There is a caretaker who will open up the house and ensure all is
              running well prior to your stay. They will also be contactable
              during your time at the homestead, should you require any
              assistance.
            </p>
            <h4>Paul is a Superhost</h4>
            <p>
              Superhosts are experienced, highly-rated hosts who are committed
              to providing great stays for guests.
            </p>
          </Col.Half>
          <Col.Half>
            <ul className="host-details__stats">
              <li>Language: English</li>
              <li>Response rate: 100%</li>
              <li>Response time: within a day</li>
            </ul>
            <Button href="#">Contact Host</Button>
            <div className="host-details__protection">
              <ProtectionSvg />
              <p>
                To protect your payment, never transfer money or communicate
                outside of the Airbnb website or app.
              </p>
            </div>
          </Col.Half>
        </Row>
      </section>
    </>
  );
}
