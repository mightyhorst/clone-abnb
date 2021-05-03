import React from "react";
import "./SearchPage.css";

import { Layout } from "../Layout";
import { 
  Column,
} from "../../uikit";

interface ISearchPage {

}

export function SearchPage(props: ISearchPage) {
  return (
    <>
      <Layout.Standard pageName="SearchPage" hideSearch>
        <Column.Container>
          <Column.Half>
          </Column.Half>
          <Column.Half>
          </Column.Half>
        </Column.Container>
      </Layout.Standard>
    </>
  );
}
