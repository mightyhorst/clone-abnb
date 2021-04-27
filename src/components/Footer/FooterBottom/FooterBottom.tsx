import React from "react";
import "./FooterBottom.css";

interface IFooterBottom {
  children?: React.ReactNode;
}

function FooterBottomLeft(props: IFooterBottom) {
  return (
    <>
      <div className="FooterBottomLeft">
        <ul>
          <li>&copy; 2021 AirBnB</li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </>
  );
}

function FooterBottomRight(props: IFooterBottom) {
  return (
    <>
      <div className="FooterBottomRight">
        <ul>
          <li>
            <a href="#">English (AU)</a>
          </li>
          <li>
            <a href="#">$ AUD</a>
          </li>
          <li>
            <a href="#">Facebook Icon</a>
          </li>
          <li>
            <a href="#">Twitter Icon</a>
          </li>
          <li>
            <a href="#">Insta Icon</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export function FooterBottom(props: IFooterBottom) {
  return (
    <>
      <footer className="FooterBottom">
        <div className="bootom-content">
          <FooterBottomRight />
          <FooterBottomLeft />
        </div>
      </footer>
    </>
  );
}