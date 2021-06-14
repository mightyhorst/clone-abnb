import "./DetailsPageHeaderRight.css";

import { Icon } from "../../../uikit";

export function DetailsPageHeaderRight() {
  return (
    <div className="PageHeaderRight">
      <a href="#" className="share-btn">
        <i className="fa fa-upload"></i>
        Share
      </a>
      <a href="#" className="save-btn">
        <i className="fa fa-heart-o"></i>Saved
      </a>
    </div>
  );
}
