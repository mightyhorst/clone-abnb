import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseLocation, IHouseLocation } from './HouseLocation';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseLocation',
    component: HouseLocation,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseLocation> = (args: IHouseLocation) => <HouseLocation {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
