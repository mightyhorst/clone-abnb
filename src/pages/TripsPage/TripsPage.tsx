import React from 'react';
import './TripsPage.css';

import { Layout } from '../Layout';
import { Tab, Card } from '../../uikit';

interface ITripsPage {}

const upcomingTab = (<>
    todo
</>);

const pastTab = (
    <>
        <Card.Container>
            <Card>
                <Card.Image imgSrc="/img/placeholder.png" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="/img/placeholder.png" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
            <Card>
                <Card.Image imgSrc="https://via.placeholder.com/400" />
                <Card.Title
                    subTitle="28 April 2020 - 29 April 2020"
                    title={'Auckland'}
                />
                <Card.List>
                    <Card.List.Item href="#">
                        Oneroa Private Oasis
                    </Card.List.Item>
                </Card.List>
                <Card.Footer href="#">Show more trip plans</Card.Footer>
            </Card>
        </Card.Container>
    </>
);

export function TripsPage(props: ITripsPage) {
    return (
        <>
            <Layout.Standard pageName="TripsPage">
                <Tab.Layout>
                    <Tab.Container>
                        <Tab>
                            Upcoming
                        </Tab>
                        <Tab isActive>
                            Past
                        </Tab>
                    </Tab.Container>
                    <Tab.Panel.Container>
                        <Tab.Panel>
                            {upcomingTab}
                        </Tab.Panel>
                        <Tab.Panel>
                            {pastTab}
                        </Tab.Panel>
                    </Tab.Panel.Container>
                </Tab.Layout>
            </Layout.Standard>
        </>
    );
}
