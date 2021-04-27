import React from "react";
import "./TabContainer.css";

interface ITabContainer {
  children: React.ReactNode;
}
export function TabContainer({ children }: ITabContainer) {
  const className = "TabContainer";
  return (
    <>
      <section className={className}>
        <div className="page-heading">
          <h1>Trips</h1>
        </div>
        <div className="tab-heading">{children}</div>
      </section>
    </>
  );
}
