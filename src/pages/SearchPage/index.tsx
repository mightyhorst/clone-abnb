import React from "react";
import "./SearchPage.css";

import { Layout } from "../Layout";
import { 
    Tab,
    Card, 
} from "../../uikit";

interface ISearchPage {}

const upcomingTab = (
  <>

  </>
);

const pastTab = (
  <>
    
  </>
);

export function SearchPage(props: ISearchPage) {
  return (
    <>
      <Layout.Standard pageName="SearchPage" hideSearch>
        Hello
      </Layout.Standard>
    </>
  );
}
