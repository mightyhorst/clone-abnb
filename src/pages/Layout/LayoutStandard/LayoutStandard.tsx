import React from "react";
import "./LayoutStandard.css";
import clsx from "clsx";

import { 
  PageHeader, 
  PageFooter,
} from "../../../components";
import {} from "../../../uikit";

interface ILayoutStandard {
  children?: React.ReactNode;
  pageName: string;
  hideSearch?: boolean;
}

export function LayoutStandard(props: ILayoutStandard) {
  return (
    <>
      <section className={clsx("LayoutStandard", props.pageName)}>
        <PageHeader hideSearch={props.hideSearch} />
        {props.children}
        <PageFooter />
      </section>
    </>
  );
}
