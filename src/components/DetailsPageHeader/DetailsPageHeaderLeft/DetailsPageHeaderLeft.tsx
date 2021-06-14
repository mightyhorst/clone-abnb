import "./DetailsPageHeaderLeft.css";

import { Icon } from "../../../uikit";

export function DetailsPageHeaderLeft() {
  return (
    <>
      <div className="DetailsPageHeaderLeft">
        <div className="page-header-title">
          <p>Waterfront Homestead at Blind Bay</p>
        </div>
        <div className="page-header-left__content">
          <span className="page-header-left__star">
            <span className="fa fa-star checked"></span>
            <strong>4.87</strong>
            <a href="#">(36 reviews)</a>
          </span>
          <span className="sepration-dot">.</span>
          <span className="page-header-left__superhost ">
            <i className="fa fa-heart"></i>
            <div>Superhost</div>
          </span>
          <span className="sepration-dot">.</span>
          <span className="page-header-left__location">
            <a href="#">Great Barrier Island, New Zealand</a>
          </span>
        </div>
      </div>
    </>
  );
}
