import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseDetails, IHouseDetails } from './HouseDetails';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseDetails',
    component: HouseDetails,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseDetails> = (args: IHouseDetails) => <HouseDetails {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
