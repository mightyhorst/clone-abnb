import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseReviews, IHouseReviews } from './HouseReviews';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseReviews',
    component: HouseReviews,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseReviews> = (args: IHouseReviews) => <HouseReviews {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
