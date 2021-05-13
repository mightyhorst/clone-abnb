import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PageFooter.css';
import './PageFooter.responsive.css';

/**
 * @requires Components
 */
import {
  Footer,
} from '..';
import { } from '../../uikit';

/**
 * @interface IPageFooter
 * @description PageFooter props types
 */
export interface IPageFooter {
}

/**
 * @function PageFooter
 * @param props - props for children 
 * @returns {PageFooter}
 */
export function PageFooter({}: IPageFooter) {
  return (<>
    <Footer>
      <Footer.Container>
        <Footer.Menu title="About">
          <Footer.Menu.Item href="#">How AirBnB works</Footer.Menu.Item>
          <Footer.Menu.Item href="#">Newsroom</Footer.Menu.Item>
        </Footer.Menu>
        <Footer.Menu title="Community">
          <Footer.Menu.Item href="#">
            Diversity and Belonging
            </Footer.Menu.Item>
          <Footer.Menu.Item href="#">Accessibility</Footer.Menu.Item>
        </Footer.Menu>
        <Footer.Menu title="Host">
          <Footer.Menu.Item href="#">Host your own home</Footer.Menu.Item>
          <Footer.Menu.Item href="#">
            Host an online experience
            </Footer.Menu.Item>
        </Footer.Menu>
        <Footer.Menu title="Support">
          <Footer.Menu.Item href="#">Our Covid 19 Response</Footer.Menu.Item>
          <Footer.Menu.Item href="#">Help Centre</Footer.Menu.Item>
        </Footer.Menu>
      </Footer.Container>
      <Footer.Bottom />
    </Footer>
  </>);
}
