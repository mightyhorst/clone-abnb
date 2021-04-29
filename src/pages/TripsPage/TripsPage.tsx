import React from "react";
import "./TripsPage.css";

import { Layout } from "../Layout";
import { Tab, Card } from "../../uikit";

interface ITripsPage {}

const upcomingTab = (
  <>
    <div className="info-div">
      <p>
        You don’t have any past trips yet—but when you do, you’ll find them
        here.
      </p>
      <Card.Image imgSrc="/img/Capture.PNG" />
    </div>
    <div className="visit-help-center">
      <p>
        Can’t find your reservation here?<a href="#"> Visit the Help Centre.</a>
      </p>
    </div>
  </>
);

const pastTab = (
  <>
    <Card.Container>
      <Card>
        <Card.Image imgSrc="/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg" />
        <div className="card-content">
          <Card.Title
            subTitle="28 April 2020 - 29 April 2020"
            title={"Auckland"}
          />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg" />
              Oneroa Private Oasis
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
      <Card>
        <Card.Image imgSrc="/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg" />
        <div className="card-content">
          <Card.Title
            subTitle="28 April 2020 - 29 April 2020"
            title={"Auckland"}
          />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg" />
              Brand New & Ready For You
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
      <Card>
        <Card.Image imgSrc="/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" />
        <div className="card-content">
          <Card.Title subTitle="07 jan 2020 - 09 jan 2020" title={"Piha"} />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" />
              Piha Beach Studio
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
      <Card>
        <Card.Image imgSrc="/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg" />
        <div className="card-content">
          <Card.Title
            subTitle="28 April 2020 - 29 April 2020"
            title={"Auckland"}
          />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg" />
              Oneroa Private Oasis
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
      <Card>
        <Card.Image imgSrc="/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg" />
        <div className="card-content">
          <Card.Title
            subTitle="28 April 2020 - 29 April 2020"
            title={"Auckland"}
          />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg" />
              Brand New & Ready For You
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
      <Card>
        <Card.Image imgSrc="/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" />
        <div className="card-content">
          <Card.Title subTitle="07 jan 2020 - 09 jan 2020" title={"Piha"} />
          <Card.List>
            <Card.List.Item href="#">
              <Card.Image imgSrc="/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" />
              Piha Beach Studio
            </Card.List.Item>
          </Card.List>
        </div>
        <Card.Footer href="#">Show more trip plans</Card.Footer>
      </Card>
    </Card.Container>
    <div className="visit-help-center">
      <p>
        Can’t find your reservation here?<a href="#"> Visit the Help Centre.</a>
      </p>
    </div>
  </>
);

export function TripsPage(props: ITripsPage) {
  return (
    <>
      <Layout.Standard pageName="TripsPage">
        <Tab.Layout>
          <Tab.Container>
            <Tab>Upcoming</Tab>
            <Tab isActive>Past</Tab>
          </Tab.Container>
          <Tab.Panel.Container>
            <Tab.Panel>{upcomingTab}</Tab.Panel>
            <Tab.Panel>{pastTab}</Tab.Panel>
          </Tab.Panel.Container>
        </Tab.Layout>
      </Layout.Standard>
    </>
  );
}
