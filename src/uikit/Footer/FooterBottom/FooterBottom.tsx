import React from "react";
import "./FooterBottom.css";

import {FooterBottomLeft} from './FooterBottomLeft';
import {FooterBottomRight} from './FooterBottomRight';

interface IFooterBottom {
}

export function FooterBottom(props: IFooterBottom) {
  return (
    <>
      <footer className="FooterBottom">
          <FooterBottomLeft />
          <FooterBottomRight />
      </footer>
    </>
  );
}
