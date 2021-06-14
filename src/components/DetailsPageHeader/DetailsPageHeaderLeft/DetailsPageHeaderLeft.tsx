import "./DetailsPageHeaderLeft.css";

import { Icon } from "../../../uikit";

export function DetailsPageHeaderLeft() {
  return (
    <>
      <div className="DetailsPageHeaderLeft">
        <div className="page-header-title">
          <p>Waterfront Homestead at Blind Bay</p>
        </div>
        <span className="page-header-left__star">
          <Icon.Star />
          <strong>4.87</strong>
          <a href="#">(36 reviews)</a>
        </span>
        <span className="page-header-left__superhost ">
          <Icon.Medal />
          <div>Superhost</div>
        </span>
        <span className="page-header-left__location">
          <a href="#">Great Barrier Island, New Zealand</a>
        </span>
      </div>
    </>
  );
}
